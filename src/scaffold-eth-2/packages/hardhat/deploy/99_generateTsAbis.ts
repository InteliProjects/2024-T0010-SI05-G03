// Instrução para não modificar ou excluir este script, a menos que você saiba o que está fazendo.
// Este script gera o arquivo contendo as definições dos ABIs dos contratos.
// Essas definições são usadas para derivar os tipos necessários nos hooks personalizados do Scaffold-ETH, por exemplo.
// Este script deve ser executado como o último script de deploy.

// Importa o módulo de sistema de arquivos do Node.js.
import * as fs from "fs";
// Importa a biblioteca Prettier para formatar o código gerado.
import prettier from "prettier";
// Importa o tipo DeployFunction de hardhat-deploy/types.
import { DeployFunction } from "hardhat-deploy/types";

// Comentário gerado que será adicionado ao topo do arquivo gerado, avisando que é um arquivo autogerado.
const generatedContractComment = `
/**
 * This file is autogenerated by Scaffold-ETH.
 * You should not edit it manually or your changes might be overwritten.
 */
`;

// Define os diretórios onde os deployments e artifacts são armazenados.
const DEPLOYMENTS_DIR = "./deployments";
const ARTIFACTS_DIR = "./artifacts";

// Função para obter os diretórios dentro de um caminho especificado.
function getDirectories(path: string) {
  return fs
    .readdirSync(path, { withFileTypes: true }) // Lê o diretório.
    .filter(dirent => dirent.isDirectory()) // Filtra apenas os diretórios.
    .map(dirent => dirent.name); // Retorna os nomes dos diretórios.
}

// Função para obter os nomes dos contratos a partir dos arquivos JSON em um diretório.
function getContractNames(path: string) {
  return fs
    .readdirSync(path, { withFileTypes: true }) // Lê o diretório.
    .filter(dirent => dirent.isFile() && dirent.name.endsWith(".json")) // Filtra apenas os arquivos JSON.
    .map(dirent => dirent.name.split(".")[0]); // Retorna os nomes dos contratos, removendo a extensão .json.
}

// Função para obter as fontes reais de um contrato, baseando-se nos contratos dos quais ele herda.
function getActualSourcesForContract(sources: Record<string, any>, contractName: string) {
  // Itera sobre os caminhos das fontes.
  for (const sourcePath of Object.keys(sources)) {
    const sourceName = sourcePath.split("/").pop()?.split(".sol")[0];
    if (sourceName === contractName) {
      const contractContent = sources[sourcePath].content as string;
      const regex = /contract\s+(\w+)\s+is\s+([^{}]+)\{/;
      const match = contractContent.match(regex);

      if (match) {
        const inheritancePart = match[2];
        // Divide os contratos herdados por vírgulas para obter a lista de contratos herdados.
        const inheritedContracts = inheritancePart.split(",").map(contract => `${contract.trim()}.sol`);

        return inheritedContracts;
      }
      return [];
    }
  }
  return [];
}

// Função para obter as funções herdadas de contratos.
function getInheritedFunctions(sources: Record<string, any>, contractName: string) {
  const actualSources = getActualSourcesForContract(sources, contractName);
  const inheritedFunctions = {} as Record<string, any>;

  // Itera sobre os contratos-fonte reais.
  for (const sourceContractName of actualSources) {
    const sourcePath = Object.keys(sources).find(key => key.includes(`/${sourceContractName}`));
    if (sourcePath) {
      const sourceName = sourcePath?.split("/").pop()?.split(".sol")[0];
      // Lê o ABI do contrato-fonte.
      const { abi } = JSON.parse(fs.readFileSync(`${ARTIFACTS_DIR}/${sourcePath}/${sourceName}.json`).toString());
      // Itera sobre as funções do ABI, adicionando-as ao objeto de funções herdadas.
      for (const functionAbi of abi) {
        if (functionAbi.type === "function") {
          inheritedFunctions[functionAbi.name] = sourcePath;
        }
      }
    }
  }

  return inheritedFunctions;
}

// Função para obter os dados dos contratos a partir dos deployments.
function getContractDataFromDeployments() {
  if (!fs.existsSync(DEPLOYMENTS_DIR)) {
    throw Error("At least one other deployment script should exist to generate an actual contract.");
  }
  // Se o diretório de deployments não existir, lança um erro indicando que pelo menos um script de deploy deve ser executado antes deste.

  const output = {} as Record<string, any>;
  // Inicializa um objeto para armazenar os dados dos contratos de cada rede.
  
  for (const chainName of getDirectories(DEPLOYMENTS_DIR)) {
    // Itera sobre cada rede (diretório) dentro do diretório de deployments.
    
    const chainId = fs.readFileSync(`${DEPLOYMENTS_DIR}/${chainName}/.chainId`).toString();
    // Lê o ID da cadeia para a rede atual.
    
    const contracts = {} as Record<string, any>;
    // Inicializa um objeto para armazenar os dados dos contratos nesta rede.
    
    for (const contractName of getContractNames(`${DEPLOYMENTS_DIR}/${chainName}`)) {
      // Itera sobre cada contrato dentro do diretório da rede.
      
      const { abi, address, metadata } = JSON.parse(
        fs.readFileSync(`${DEPLOYMENTS_DIR}/${chainName}/${contractName}.json`).toString(),
      );
      // Lê os dados do contrato, incluindo ABI, endereço e metadados.
      
      const inheritedFunctions = getInheritedFunctions(JSON.parse(metadata).sources, contractName);
      // Obtém as funções herdadas do contrato.
      
      contracts[contractName] = { address, abi, inheritedFunctions };
      // Armazena os dados do contrato no objeto de contratos.
    }
    output[chainId] = contracts;
    // Associa os contratos à ID da cadeia no objeto de saída.
  }
  return output;
  // Retorna o objeto contendo os dados dos contratos organizados por ID da cadeia.
}

/**
 * Gera o arquivo de definição TypeScript dos contratos com base na saída JSON dos scripts de deploy dos contratos.
 * Este script deve ser executado por último.
 */
const generateTsAbis: DeployFunction = async function () {
  const TARGET_DIR = "../nextjs/contracts/";
  // Define o diretório alvo onde o arquivo será gerado.
  
  const allContractsData = getContractDataFromDeployments();
  // Obtém os dados de todos os contratos implantados.
  
  const fileContent = Object.entries(allContractsData).reduce((content, [chainId, chainConfig]) => {
    return `${content}${parseInt(chainId).toFixed(0)}:${JSON.stringify(chainConfig, null, 2)},`;
  }, "");
  // Formata os dados dos contratos em uma string para ser inserida no arquivo.
  
  if (!fs.existsSync(TARGET_DIR)) {
    fs.mkdirSync(TARGET_DIR);
    // Se o diretório alvo não existir, cria-o.
  }
  fs.writeFileSync(
    `${TARGET_DIR}deployedContracts.ts`,
    prettier.format(
      `${generatedContractComment} import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract"; \n\n
 const deployedContracts = {${fileContent}} as const; \n\n export default deployedContracts satisfies GenericContractsDeclaration`,
      {
        parser: "typescript",
      },
    ),
  );
  // Escreve o conteúdo formatado no arquivo TypeScript de definição dos contratos.

  console.log(`📝 Updated TypeScript contract definition file on ${TARGET_DIR}deployedContracts.ts`);
  // Exibe uma mensagem no console indicando que o arquivo foi atualizado.
};

export default generateTsAbis;
// Exporta a função para que possa ser executada como parte dos scripts de deploy.

// Define tags para o script, permitindo sua execução seletiva com o comando específico.
generateTsAbis.tags = ["generateTsAbis"];

// Indica que este script deve ser executado por último.
generateTsAbis.runAtTheEnd = true;

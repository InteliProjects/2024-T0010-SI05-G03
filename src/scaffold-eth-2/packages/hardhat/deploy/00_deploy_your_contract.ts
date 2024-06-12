// Importa o tipo HardhatRuntimeEnvironment de hardhat/types para usar no script.
import { HardhatRuntimeEnvironment } from "hardhat/types";
// Importa o tipo DeployFunction de hardhat-deploy/types para definir a função de deploy.
import { DeployFunction } from "hardhat-deploy/types";
// Importa o tipo Contract de ethers, usado para interagir com contratos na blockchain.
import { Contract } from "ethers";

/**
 * Declara a função de deploy para o contrato "YourContract". A função é assíncrona pois realiza operações que retornam Promises,
 * como interações com a blockchain.
 * @param hre Uma instância de HardhatRuntimeEnvironment, fornecendo acesso a todas as funcionalidades do Hardhat e plugins.
 */
const deployYourContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  /*
    No localhost, a conta do deployer é aquela que vem com o Hardhat, que já é financiada.

    Ao fazer deploy para redes ao vivo (ex.: `yarn deploy --network sepolia`), a conta do deployer
    deve ter saldo suficiente para pagar as taxas de gás para a criação do contrato.

    Você pode gerar uma conta aleatória com `yarn generate`, o que preencherá DEPLOYER_PRIVATE_KEY
    com uma chave privada aleatória no arquivo .env (depois usada em hardhat.config.ts).
    Você pode executar o comando `yarn account` para verificar seu saldo em cada rede.
  */
  const { deployer } = await hre.getNamedAccounts(); // Obtém a conta de deployer definida nos namedAccounts do Hardhat.
  const { deploy } = hre.deployments; // Obtém a função de deploy do objeto de deployments do Hardhat.


  await deploy("FairLink", { // Realiza o deploy do contrato "FairLink".
    from: deployer, // Define a conta de deployer como remetente da transação de deploy.
    // Define os argumentos do construtor do contrato. Neste caso, não há argumentos.
    args: [],
    log: true, // Habilita o loggin da transação de deploy para facilitar o acompanhamento.
    // Define autoMine para true, o que acelera o processo de deploy em redes locais ao minar automaticamente a transação.
    // Não afeta redes públicas.
    autoMine: true,
  });

  // Após o deploy, obtém a instância do contrato implantado para possibilitar interações posteriores.
  const yourContract = await hre.ethers.getContract<Contract>("FairLink", deployer);
  console.log("👋 Initial greeting:", await yourContract); // Exibe uma mensagem inicial, possível retorno de uma função do contrato.
};

export default deployYourContract; // Exporta a função de deploy para ser usada pelo Hardhat.

// Define tags para a função de deploy, permitindo sua execução seletiva com o comando `yarn deploy --tags YourContract`.
deployYourContract.tags = ["FairLink"];

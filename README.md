# Inteli - Instituto de Tecnologia e Liderança 

<p align="center">
<a href= "https://www.inteli.edu.br/"><img src="assets/inteli.png" alt="Inteli - Instituto de Tecnologia e Liderança" border="0" width=40% height=40%></a>
</p>

<br>

# Aplicações em Blockchain

## Blockoli - FairLink

 <br>

## Sumário

[1. Integrantes](#c1)

[2. Professores](#c2)

[3. Descrição](#c3)

[4. Estrutura de pastas](#c4)

[5. Instalação](#c5)

[6. Front-End da Aplicação](#c6)

[7. Deploy da Aplicação](#c7)

[8. Histórico de lançamentos](#c8)

[9. Licença/License](#c9)

<br>

## <a name="c1"></a>1.👨‍🎓 Integrantes: 
- <a href="https://www.linkedin.com/in/ana-carolina-cremonezi-martire-2a7335268/">Ana Carolina Cremonezi Martire</a>
- <a href="https://www.linkedin.com/in/henrique-cox-4644bb270/">Henrique Cox Cabral Oliveira de Moura</a>
- <a href="https://www.linkedin.com/in/kaylanevasconcelos/">Kaylane de Cássia Vasconcelos de Brito</a>
- <a href="https://www.linkedin.com/in/marcelo-sitton-878248271/"> Marcelo Faska Sitton
- <a href="https://www.linkedin.com/in/marcelo-saadi-pessini-003212209/">Marcelo Saadi Pessini</a>
- <a href="https://www.linkedin.com/in/nicollas-isaac/">Nicollas Isaac Queiroz Batista</a>
- <a href="https://www.linkedin.com/in/ricardo-novaes-24276b271/">Ricardo Baumgart Magalhães de Novaes</a>

## <a name="c2"></a>2.👩‍🏫 Professores:
### Orientador(a) 
- <a href="https://www.linkedin.com/in/renato-penha/">Renato Penha</a>

### Instrutores
- Ana Cristina
- <a href="https://www.linkedin.com/in/fernando-pizzo-208b526a/">Fernando Pizzo</a>
- <a href="https://www.linkedin.com/in/rafael-jacomossi-6135b0a1/">Rafael Jacomossi</a>
- <a href="https://www.linkedin.com/in/sergio-venancio-a509b342/">Sergio Venancio</a>
- <a href="https://www.linkedin.com/in/vthayashi/">Victor Hayashi</a>

## <a name="c3"></a>3.📜 Descrição

O projeto Blockchain, iniciado pela empresa Alliance, tem como objetivo transformar o processo de cotação no setor de Supply Chain, focando especialmente na automatização das negociações. Enfrentando o desafio da falta de transparência e a presença de fornecedores não confiáveis, o projeto se propõe a utilizar a tecnologia blockchain para garantir a integridade e a veracidade das informações de cotação. Ao estabelecer um sistema onde o preço médio de mercado para produtos e serviços é determinado de forma justa e transparente, e as transações são rastreáveis e auditáveis, a Alliance busca criar um ambiente de negociação mais eficiente, seguro e livre de intermediários. Utilizando a SAP BTP como plataforma de desenvolvimento, o projeto não só promete revolucionar o processo de cotação com a implementação de um MVP que registra transações de compra e venda na blockchain, mas também estabelece uma nova norma de confiança e eficiência em toda a cadeia de suprimentos.


## <a name="c4"></a>4.📁 Estrutura de pastas

Abaixo está a estrutura organizada das pastas do projeto FairLink, com descrições detalhadas para cada diretório e arquivo chave:

```
.
|--> assets
|--> docs
  |--> others
  |--> documentação
|--> src
  |--> backend
    |--> node_modules
      |--> backend.js
      |--> banco_de_dados.db
      |--> banco_de_dados.sqbpro
      |--> package-lock.json
      |--> package.json
  |--> scaffold-eth-2
    |--> .husky
    |--> .yarn
    |--> node_modules
    |--> packages
      |--> foundry
        |--> contracts
          |--> FairLink.sol
        |--> deployments
        |--> script
        |--> test
          |--> TestFairLink.sol
      |--> hardhat
        |--> contracts
          |--> FairLink.sol
        |--> deploy
        |--> deployments
        |--> scripts
        |--> test
          |--> YourContract.ts
      |--> nextjs
        |--> app
          |--> blockexplorer
          |--> debug
          |--> home
          |--> newuser
          |--> precomedio
          |--> transacoes
          |--> layout.tsx
          |--> page.tsx
          |--> style.css
        |--> assets
        |--> components
          |--> assets
          |--> scaffold-eth
        |--> contracts
          |--> deployedContracts.ts
          |--> externalContracts.ts
        |--> hooks
        |--> node_modules
        |--> public
        |--> services
          |--> store
          |--> web3
        |--> styles
          |--> global.css
        |--> types
          |--> abitype
          |--> utils.ts
        |--> utils

|--> README.md
```

### Descrição das Pastas e Arquivos:

- **`assets`**: Diretório para recursos gráficos usados no projeto.
- **`docs`**: Diretório para documentações relacionadas ao projeto.
  - **`others`**: Diretório contendo documentos não relacionados à documentação principal do projeto.
  - **`documentação`**: Contém documentos específicos relacionados à documentação do projeto.
- **`src`**: Diretório raiz do código fonte do projeto.
  - **`backend`**: Contém o código relacionado ao backend da aplicação.
    - **`node_modules`**: Bibliotecas de terceiros instaladas para o backend.
    - **`backend.js`**: Arquivo principal do backend.
    - **`banco_de_dados.db`**: Banco de dados SQLite utilizado pela aplicação.
    - **`banco_de_dados.sqbpro`**: Arquivo de projeto do banco de dados SQLite.
    - **`package-lock.json`**: Arquivo de bloqueio das versões das dependências do Node.js.
    - **`package.json`**: Arquivo de manifesto do Node.js que lista as dependências do projeto.
  - **`scaffold-eth-2`**: Diretório contendo o código relacionado ao frontend da aplicação, baseado no Scaffold-ETH.
    - **`.husky`**: Diretório para ganchos do Husky, uma ferramenta de garantia de qualidade de código.
    - **`.yarn`**: Diretório de configuração do Yarn, gerado automaticamente.
    - **`node_modules`**: Bibliotecas de terceiros instaladas para o frontend.
    - **`packages`**: Diretório contendo os pacotes principais do projeto.
      - **`foundry`**: Pacote do Foundry, contendo os testes automatizados relacionados ao contrato inteligente FairLink.
        - **`contracts`**: Contém um arquivo **não utilizado** do Smart Contract FairLink.
        - **`deployments`**: Contém arquivos relacionados às implantações do contrato.
        - **`script`**: Scripts relacionados ao contrato inteligente.
        - **`test`**: Contém um arquivo TestFairLink que realiza os testes automatizados do Smart Contract.
      - **`hardhat`**: Pacote do Hardhat, contendo o contrato FairLink e scripts relacionados ao mesmo.
        - **`contracts`**: Contém um arquivo do Smart Contract FairLink.
        - **`deploy`**: Scripts de implantação do contrato.
        - **`deployments`**: Possivelmente contém arquivos relacionados às implantações do contrato.
        - **`scripts`**: Scripts relacionados ao contrato inteligente.
        - **`test`**: Contém um arquivo **não utilizado**.
      - **`nextjs`**: Contém o código do frontend da aplicação baseado no Next.js.
        - **`app`**: Diretório contendo os componentes e páginas da aplicação.
        - **`assets`**: Recursos estáticos usados na aplicação.
        - **`components`**: Componentes React reutilizáveis.
        - **`contracts`**: Arquivos relacionados aos contratos inteligentes, como deployedContracts.ts e externalContracts.ts.
        - **`hooks`**: Hooks personalizados utilizados na aplicação.
        - **`node_modules`**: Bibliotecas de terceiros instaladas para o frontend.
        - **`public`**: Arquivos públicos da aplicação.
        - **`services`**: Serviços utilizados na aplicação, como store e web3.
        - **`styles`**: Estilos globais da aplicação.
        - **`types`**: Tipos TypeScript utilizados na aplicação.
        - **`utils`**: Utilitários diversos utilizados na aplicação.
- **`README.md`**: Arquivo de README principal do projeto, contendo informações sobre o projeto, instruções de instalação e implantação, descrição das pastas e arquivos, entre outros detalhes importantes.

---

Esta estrutura é projetada para maximizar a eficiência do desenvolvimento e facilitar a compreensão dos novos colaboradores sobre como o projeto está organizado.

### Nota:

Este README é uma introdução básica à estrutura do projeto. Para mais detalhes sobre cada componente e como eles trabalham juntos, favor consultar a `documentacao.md`.

## <a name="c5"></a>5.🔧 Instalação

Siga estas instruções para configurar o ambiente de desenvolvimento e iniciar o projeto FairLink localmente. Certifique-se de ter as versões corretas das ferramentas necessárias, como Node.js e Yarn.

### Pré-requisitos:

- Node.js (recomenda-se a versão 0.18.0)
- Yarn (recomenda-se a versão 3.2.3)
- Git

### Passos para instalação:

1. **Clonar o Repositório**: Primeiramente, clone o repositório do projeto usando o Git:

```sh
git clone <https://github.com/Inteli-College/2024-T0010-SI05-G03>
```

2. **Entrar no Diretório do Projeto**: Após clonar o repositório, navegue até a pasta `src/scaffold-eth-2`:

```sh
cd src/scaffold-eth-2
```

3. **Instalar Dependências**: Execute o seguinte comando para instalar todas as dependências necessárias do projeto:

```sh
yarn install
```

4. **Iniciar o Projeto**: Por fim, inicie o projeto com o Yarn:

```sh
yarn start
```

Após esses passos, o servidor de desenvolvimento deve estar rodando e você pode visualizar a aplicação no seu navegador.

### Dicas Úteis:

- Se encontrar algum problema na instalação das dependências, certifique-se de que está usando as versões recomendadas do Node.js e do Yarn.
- Para verificar a versão do Node.js, execute `node -v` no terminal.
- Para verificar a versão do Yarn, execute `yarn -v` no terminal.

### Problemas Comuns:

- **Erros de Permissão**: Se você encontrar erros de permissão ao usar o Yarn, tente executar com `sudo` (para sistemas baseados em UNIX) ou execute o terminal como administrador (para Windows).
- **Dependências Desatualizadas**: Se as dependências estiverem desatualizadas ou houver incompatibilidades, considere executar `yarn upgrade` para atualizar as dependências.

### Notas Finais:

Estas instruções são para o desenvolvimento e execução local do projeto. Para produção e outros ambientes, podem ser necessários passos adicionais de configuração e segurança.

## <a name="c6"></a>6.Front-End da Aplicação

### Introdução ao Scaffold-ETH

Scaffold-ETH é uma ferramenta de desenvolvimento que combina várias tecnologias para facilitar a criação e iteração rápida de contratos inteligentes e frontend. Ela serve como uma base para prototipagem rápida em projetos de Ethereum, permitindo que desenvolvedores se concentrem na lógica específica de seus aplicativos, em vez de configurar o ambiente de desenvolvimento do zero. Para obter mais informações e documentação detalhada sobre o Scaffold-ETH, visite a [documentação oficial](https://docs.scaffoldeth.io).

No projeto FairLink, o Scaffold-ETH foi utilizado como a plataforma de desenvolvimento principal, permitindo a integração eficiente e rápida entre o contrato inteligente FairLink.sol e o frontend da aplicação. Isso proporcionou uma estrutura robusta para o desenvolvimento, testes e implantação do projeto dentro do ecossistema Ethereum.


#### Componentes do Scaffold-ETH

1. **Hardhat**: Hardhat é conhecido por sua flexibilidade e extensivo ecossistema de plugins, ele foi usado para realizar a deploy na rede alchemy/sepolia.

2. **Wagmi**: Fornece React Hooks para interagir com a blockchain Ethereum, facilitando a integração do frontend com contratos inteligentes e serviços blockchain.

3. **Viem**: Atua como uma interface de baixo nível que oferece primitivos para interação com a Ethereum, sendo uma alternativa aos populares ethers.js e web3.js.

4. **NextJS**: Usado para construir o frontend, oferece muitos hooks e componentes pré-fabricados que simplificam o desenvolvimento de interfaces de usuário dinâmicas e interativas.

5. **RainbowKit**: Facilita a integração de funcionalidades de carteira, permitindo aos usuários conectar suas carteiras de criptomoedas de maneira simples e segura.

6. **DaisyUI**: Fornece componentes pré-construídos baseados em Tailwind CSS, facilitando o desenvolvimento e a estilização do frontend.

A documentação a seguir descreve os principais arquivos de código no repositório do frontend da aplicação, destacando nomes descritivos para variáveis e funções, e incluindo comentários que elucidam os fluxos de controle e comunicação do frontend.

### Página Inicial - `page.tsx`

```tsx
// Componente Home que serve como a página de entrada do usuário na aplicação Blockoli.
const Home: NextPage = () => {
  // ...
};
```

O `page.tsx` apresenta a página inicial do aplicativo Blockoli com uma interface visual rica, oferecendo imagens estilizadas e opções de interação, como um botão de conexão de carteira.

### Registro de Usuários - `NewUser.tsx`

```tsx
// O componente NewUser permite aos usuários registrar uma conta no aplicativo Blockoli.
const NewUser: NextPage = () => {
  // ...
};
```

O `NewUser.tsx` inclui lógica para registrar usuários no contrato inteligente, fazendo uso de hooks personalizados para escrever no blockchain e prover feedback visual do status da transação.

### Debug de Contratos - `Debug.tsx`

```tsx
// O componente Debug fornece uma interface para interagir e testar as funcionalidades do contrato Blockoli.
const Debug: NextPage = () => {
  // ...
};
```

O `Debug.tsx` é usado para testar e interagir com os contratos implantados, com um design simplificado e comentários explicativos sobre o propósito de cada elemento da interface.

Mais informações sobre o frontend da aplicação podem ser encontrados na `documentação.md` na `seção 6`.

## <a name="c7"></a>7.Deploy da Aplicação

Para dar deploy do contrato em uma rede ativa, há algumas coisas que precisam ser ajustadas.

### 1. Configuração da rede

O Scaffold-ETH 2 vem com uma seleção de redes pré-definidas que também podem ser adicionadas na sua rede personalizada em:

- Hardhat => `packages/hardhat/hardhat.config.ts`
- Foundry => `packages/foundry/foundry.toml`

Aqui estão os [Alchemy docs](https://docs.alchemy.com/docs/how-to-add-alchemy-rpc-endpoints-to-metamask) para informações sobre redes específicas.

### 2. Gerar uma nova conta ou adicionar uma para implantar o(s) contrato(s).

A conta do implantador é a conta que dará deploy nos contratos. Além disso, a conta do implantador será usada para executar quaisquer chamadas de função que façam parte do seu script de implantação.

Para criar uma conta aleatória e adicionar a `DEPLOYER_PRIVATE_KEY` ao arquivo `.env`, execute:

```
yarn generate
```

Se preferir configurar manualmente sua própria chave privada, será necessário adicionar `DEPLOYER_PRIVATE_KEY=suaWalletPrivateKey` ao arquivo `packages/hardhat/.env` / `packages/foundry/.env`.

A conta configurada e os saldos podem ser verificados (gerada ou definida manualmente) com:

```
conta yarn
```

### 3. Deploy do Contrato Inteligente

Por padrão, o `yarn deploy` irá implantar o contrato na rede local. O `defaultNetwork` pode ser mudado em:

- Hardhat => `hardhat.config.ts`
- Foundry => `foundry.toml`

Execute o comando abaixo para implantar o contrato inteligente na rede de destino. Certifique-se de ter alguns fundos na sua conta do deployer para pagar pela transação.

```
yarn deploy --network nome_da_rede
```

Por exemplo: `yarn deploy --network sepolia`

### 4. Verifique o contrato inteligente

O seu contrato inteligente pode ser verificado no Etherscan executando:

```
yarn verify --network network_name
```

por exemplo: `yarn verify --network sepolia`

Este comando **funciona tanto no Hardhat quanto no Foundry**, verificando todos os contratos implantados. No entanto, o método de verificação difere dependendo do framework Solidity utilizado:

- Hardhat => usa [etherscan-verify from hardhat-deploy](https://www.npmjs.com/package/hardhat-deploy#4-hardhat-etherscan-verify).
- Foundry => utiliza o script `VerifyAll.s.sol` localizado em `packages/foundry/script`.

Adicionalmente, **no Hardhat**, há um método alternativo para verificação de contratos. Pode-se usar [hardhat-verify](https://hardhat.org/hardhat-runner/plugins/nomicfoundation-hardhat-verify) para verificar os contratos, passando o nome da rede, o endereço do contrato e os argumentos do construtor (se houver): `yarn hardhat-verify --network network_name contract_address "Constructor arg 1"`

Se a cadeia que utilizada não é suportada por nenhum dos métodos de verificação, pode-se adicionar novas cadeias suportadas ao método escolhido, quer [etherscan-verify](https://www.npmjs.com/package/hardhat-deploy#options-2) ou [hardhat-verify](https://hardhat.org/hardhat-runner/plugins/nomicfoundation-hardhat-verify#adding-support-for-other-networks).

## <a name="c8"></a>8.🗃 Histórico de lançamentos

* 0.5.0 - 12/04/2024
    * Revisão do Código;
    * Revisão da Documentação;
    * Apresentação Final.

* 0.4.0 - 29/03/2024
    * Deploy de Smart Contracts;
    * Documentação do Deploy de Smart Contracts;
    * Testes Automatizados.

* 0.3.0 - 15/03/2024
    * Front-end integrado com Smart Contract;
    * Planejamento da integração;
    * Documentação do Front-end.

* 0.2.0 - 01/03/2024
    * Smart Contracts;
    * Documentação dos Smart Contracts.

* 0.1.0 - 16/02/2024
    * Entendimento do Negócio;
    * Entendimento da Experiência do Usuário;
    * Análise de Risco (Segurança da Informação).

## <a name="c9"></a>9.📋 Licença/License

<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"><p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><a property="dct:title" rel="cc:attributionURL" href="https://github.com/Inteli-College/2024-T0010-SI05-G03">BLOCKOLI</a> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://www.inteli.edu.br">Inteli</a>, <a href="https://www.linkedin.com/in/ana-carolina-cremonezi-martire-2a7335268/">Ana Carolina Cremonezi Martire</a>, <a href="https://www.linkedin.com/in/henrique-cox-4644bb270/">Henrique Cox Cabral Oliveira de Moura</a>, <a href="https://www.linkedin.com/in/kaylanevasconcelos/">Kaylane de Cássia Vasconcelos de Brito</a>, <a href="https://www.linkedin.com/in/marcelo-sitton-878248271/"> Marcelo Faska Sitton</a>, <a href="https://www.linkedin.com/in/marcelo-saadi-pessini-003212209/">Marcelo Saadi Pessini</a>, <a href="https://www.linkedin.com/in/nicollas-isaac/">Nicollas Isaac Queiroz Batista</a>, <a href="https://www.linkedin.com/in/ricardo-novaes-24276b271/">Ricardo Baumgart Magalhães de Novaes</a> is licensed under <a href="http://creativecommons.org/licenses/by/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">Attribution 4.0 International</a>.</p>


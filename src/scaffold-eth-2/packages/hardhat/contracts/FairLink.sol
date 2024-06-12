// SPDX-License-Identifier: MIT
pragma solidity >=0.4.0;

contract FairLink{
    // Estrutura de transação
    // (as informações abaixo são essenciais para verificar a validade das transações,
    // dos usuários envolvidos e dos produtos associados).

    struct Transaction {

        address sender;                   // Endereço do remetente da transação
        address receiver;                 // Endereço do destinatário da transação
        uint256 productId;                // ID do produto associado à transação
        uint256 productQuantity;          // Quantidade de produtos transacionados
        uint256 valueTimesOneHundred;     // Valor da transação multiplicado por 100
        uint256 timestamp;                // Carimbo de data/hora da transação
        uint256 stateId;                  // Identificador do estado da transação
        uint256 productPrice;             // Identificação do preço do produto

    }

    // Lista de transações para manter um histórico completo e transparente de todas as transações.
    Transaction[] private transactionStorical;

    // Lista de usuários para poder consultar todos os usuários registrados no contrato.
    address[] private allUsers;

    // Declaração do "owner" para que se saiba quem é o dono do contrato.
    address public owner;

    // Eventos que serão acionados nas funções de registro de usuário e transação.
    event LogUserRegistration(string message, address _walletCompany);
    event LogTransaction(string message);

    // Construtor para armazenar, na variável "owner", o endereço de quem fez a deploy (Alliance).
    constructor() {
        owner = msg.sender;
    }

    // Modifier para checar se o usuário atual do contrato é o "owner".
    // (O "owner" só pode ser a Alliance).
    modifier onlyAlliance() {
        require(msg.sender == owner, "Not an owner");
        _;
    }

    // Tabela mapping para endereços de usuários apontando com booleano (True e False).
    mapping(address => bool) public users;



    // Requisito de Negócio 1: Cadastro de Usuário

    function userRegister(address _walletCompany) external returns (bool) {

        // Verifica se o usuário está registrado.
        if (users[_walletCompany]) {

            // Retorna "false" caso o usuário já esteja cadastrado.
            return false;
        }

    
        // Aponta true para o endereço do usuário.
        users[_walletCompany] = true;

        // Envia o novo usuário para a lista de usuários.
        allUsers.push(_walletCompany);

        // Emite evento: "Usuário Registrado com Sucesso".
        emit LogUserRegistration("User successfully registered.", _walletCompany);

        // Returna "true" para indicar sucesso.
        return true;

    }



    // Requisito de Negócio 2: Registro de Transação

    function transactionRegister(address _sender, address _receiver, uint256 _productId, uint256 _productQuantity, uint256 _productPrice, uint256 _valueTimesOneHundred, uint256 _timestamp, uint256 _stateId) external returns (bool) {        

        // Verificações antes de registrar a transação.
        // Os usuários ("sender" e "receiver") precisam estar na lista de usuários e precisam ser diferentes.
        if (users[_sender] && users[_receiver] && _sender != _receiver) {

            // Cria um struct Transaction e o adiciona à lista "transactionStorical".
            transactionStorical.push(Transaction({
                sender: _sender,
                receiver: _receiver,
                productId: _productId,
                productQuantity: _productQuantity,
                valueTimesOneHundred: _valueTimesOneHundred,
                timestamp: _timestamp,
                stateId: _stateId,
                productPrice: _productPrice
            }));

            // Emite evento: "Transação Registrada Com Sucesso".
            emit LogTransaction("Transaction successfuly completed.");

            // Retorna "true" para indicar sucesso.
            return true;

        }

        // Retorna "false" para indicar insucesso.
        return false; 

    }



    // Requisito de negócio 3: Serviços de Consulta

    // Devolve todos os registros de transações realizados.
    // Assim, é possível ver uma lista com todos os usuários registrados no contrato.
    function getAllTransactions() external view returns(Transaction[] memory) {

        // Retorna uma lista com o histórico de transações.
        return transactionStorical;

    }

    

    // Devolve todos os usuários cadastrados.
    // Assim, é possível ver uma lista com todos os usuários registrados no contrato.
    function getAllUsers() external view returns(address[] memory){

        // Retorna uma lista com todos os usuários registrados.
        return allUsers;

    }

}
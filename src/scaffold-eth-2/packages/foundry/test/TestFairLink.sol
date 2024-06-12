// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Test.sol";
import "../contracts/FairLink.sol";

// Contrato de teste para validar as funções no contrato FairLink
//contrato utilizado para os testes é da versão 3.0 (mais atual). Para encontrar o smart contract se acessa em src/scaffold-eth-2/packages/hardhat/contracts/fairlink.sol
contract FairLinkTest is Test {
    // Criação de três usuários fictícios para fazer os testes.
    address guest = address(1);
    address guest2 = address(2);
    address guest3 = address(3);

    // Declaração de uma variável do tipo fairlink que será utilizada para instanciar o contrato FairLink.
    FairLink public fairlink;

    // Função "setUp" que inicia o contrato antes de cada teste.
    function setUp() public {
        fairlink = new FairLink();
    }

    // Função que testa a função userRegister(). [Test ID: FLT-UR-001]
    function testUserRegister() public {
        // Chama a função userRegister() do contrato FairLink para utilizar o usuário "guest".
        fairlink.userRegister(guest);
        // Verifica se o usuário "guest" foi registrado corretamente chamando a função users() do contrato com o endereço do usuário "guest" como argumento e passando o resultado para a função assertTrue().
        assertTrue(fairlink.users(guest));
    }

    // Função que testa a função getAllUsers(). [Test ID: FLT-GAU-002]
    function testGetAllUsers() public {
        // Chama a função userRegister() do contrato FairLink para utilizar os usuários "guest", "guest2" e "guest3".
        fairlink.userRegister(guest);
        fairlink.userRegister(guest2);
        fairlink.userRegister(guest3);
        // Chama a função getAllUsers() do contrato FairLink para obter todos os usuários registrados.
        // Armazena o resultado na memória.
        address[] memory allUsers = fairlink.getAllUsers();
        // Verifica se o número de usuários retornados é igual a 3 (o número de usuários registrados acima).
        assertEq(allUsers.length, 3);
    }

    // Função que testa a função transactionRegister(). [Test ID: FLT-TR-003]
    function testTransactionRegister() public {
        // Chama a função userRegister() do contrato FairLink para utilizar os usuários "guest", "guest2" e "guest3".
        fairlink.userRegister(guest);
        fairlink.userRegister(guest2);
        // Chama a função transactionRegister() do contrato FairLink para registrar uma transação entre os dois usuários.
        // Além disso, declara uma variável "result" do tipo booleano para armazenar o resultado da função transactionRegister().
        bool result = fairlink.transactionRegister(
            // Para realizar a função transactionRegister(), algumas informações devem ser passadas (2 addresses e 6 uint256). Os valores passados abaixo são fictícios.
            guest,
            guest2,
            2,
            12,
            432,
            43,
            77,
            81
        );
        // Verifica se a transação foi registrada com sucesso (retornou um valor booleano (true) no result).
        assertTrue(result);
    }

    // Função que testa a função getAllTransictions(). [Test ID: FLT-GAT-004]
    function testGetAllTransactions() public {
        // Chama a função userRegister() do contrato FairLink para utilizar os usuários "guest" e "guest2".
        fairlink.userRegister(guest);
        fairlink.userRegister(guest2);
        // Chama a função transactionRegister() do contrato FairLink para registrar uma transação entre os dois usuários.
        // Além disso, declara uma variável "result" do tipo booleano para armazenar o resultado da função transactionRegister().
        bool result = fairlink.transactionRegister(
            guest,
            guest2,
            2,
            12,
            432,
            43,
            77,
            81
        );
        // Chama a função getAllTransactions() do contrato FairLink.
        // Como esta função retorna um booleano, usamos address(fairlink).call() para chamar a função e recuperar o resultado.
        // Em seguida, usamos abi.encodeWithSignature() para codificar o nome da função que queremos chamar.
        // O resultado é uma tupla com dois valores: o primeiro é o resultado da chamada da função, que aqui não é usado, e o segundo é um valor booleano que indica se a chamada foi bem-sucedida.
        (bool success, ) = address(fairlink).call(
            abi.encodeWithSignature("getAllTransactions()")
        );
        assertTrue(success);
    }
}

// Define o ambiente como client-side
"use client";

import { useState } from 'react';
import type { NextPage } from "next";
import { Header } from "../../components/Header"

// Hook para buscar informações do contrato implantado
import { useDeployedContractInfo } from "../../hooks/scaffold-eth/useDeployedContractInfo";
// Hook para chamar métodos de escrita do contrato
import { useScaffoldContractWrite } from "../../hooks/scaffold-eth/useScaffoldContractWrite";

// Componente para interagir com um único método de contrato para escrita
import { SingleContractWriteMethod } from "../debug/_components/contract/SingleContractWriteMethod";
// Componente para interagir com um único método de contrato para leitura
import { SingleContractReadMethod } from "../debug/_components/contract/SingleContractReadMethods";

const Transactions: NextPage = () => {
  const [view, setView] = useState<'register' | 'view' | null>(null);

  // Nomes do contrato e função usados para registrar um usuário e ler transações
  const contractName = "FairLink";
  const TransactionFunctionWrite = "transactionRegister";
  const TransactionFunctionRead = "getAllTransactions";

  // Obtém informações do contrato implantado, como endereço e ABI
  const { data: deployedContractData } = useDeployedContractInfo(contractName);

  // Hook para executar uma função de escrita no contrato
  const { writeAsync, isMining } = useScaffoldContractWrite({
    contractName,
    functionName: TransactionFunctionWrite,
    args: [undefined],
  });

  // Função para tratar a submissão da escrita no contrato
  const handleWriteSubmit = async () => {
    try {
      const result = await writeAsync();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Header />

      <h1 className="text-lg mb-4 text-center">Cadastre ou visualize transações no Blockoli</h1>
      <div className="mb-4 flex justify-center">
        <button className="mr-4 px-4 py-2 border border-primary-content rounded" onClick={() => setView('register')}>Cadastrar Transação</button>
        <button className="px-4 py-2 bg-primary-content text-white rounded" onClick={() => setView('view')}>Visualizar Transações</button>
      </div>


      {deployedContractData && view === 'register' && (
        <SingleContractWriteMethod
          onChange={handleWriteSubmit}
          deployedContractData={deployedContractData}
          functionName={TransactionFunctionWrite}
        />
      )}

      {deployedContractData && view === 'view' && (
        <SingleContractReadMethod
          deployedContractData={deployedContractData}
          functionName={TransactionFunctionRead}
        />
      )}

      {isMining && <p>Transação está sendo minerada...</p>}
    </div>
  );
};

export default Transactions;

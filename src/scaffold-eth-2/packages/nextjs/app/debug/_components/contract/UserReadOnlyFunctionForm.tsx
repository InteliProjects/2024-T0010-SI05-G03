import { useState } from "react";
import { InheritanceTooltip } from "./InheritanceTooltip";
import { useContractRead } from "wagmi";

// Simule a função de envio para o backend
async function enviarTransacao(transacao) {
  const response = await fetch('http://localhost:3001/transacao', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(transacao, (key, value) =>
      typeof value === 'bigint' ? value.toString() : value  // Converta BigInt em String
    ),
  });

  if (!response.ok) {
    throw new Error('Erro ao enviar transação');
  }

  return response.json();
}


export const UserReadOnlyFunctionForm = ({
  contractAddress,
  abiFunction,
  inheritedFrom,
  abi,
}) => {
  const [form, setForm] = useState({});
  const [result, setResult] = useState();

  const { isFetching, refetch } = useContractRead({
    address: contractAddress,
    functionName: abiFunction.name,
    abi: abi,
    args: [],
    enabled: false,
  });

  const handleRead = async () => {
    const { data } = await refetch();
    setResult(data);

    // Se a função chamada for getAllTransactions, envie cada transação para o backend
    if (abiFunction.name === 'getAllTransactions' && Array.isArray(data)) {
      for (const transaction of data) {
        await enviarTransacao({
          sender: transaction.sender,
          receiver: transaction.receiver,
          product_id: transaction.productId,
          value: transaction.valueTimesOneHundred,
          timestamp: transaction.timestamp,
          state_id: transaction.stateId,
        });
      }
    }
  };

  return (
    <div className=" gap-3 py-5 first:pt-0 last:pb-1">
      <p className="font-medium my-0 break-words">
        <InheritanceTooltip inheritedFrom={inheritedFrom} />
      </p>
      <button
        className="btn btn-secondary btn-sm"
        onClick={handleRead}
        disabled={isFetching}
      >
        {isFetching ? (
          <span className="loading loading-spinner loading-xs"></span>
        ) : (
          abiFunction.name === 'getAllUsers' ? 'Ver Usuários 📡' : 'Ver Transações 📡'
        )}
      </button>
      <div className="justify-between">
        <div className="space-y-4 p-4 rounded-md">
          {abiFunction.name === 'getAllTransactions' && Array.isArray(result) && result.map((transaction, index) => (
            <div key={index} className="p-4 bg- rounded-md border border-primary-content shadow-lg-100">
              <p className="text-primary-content">Sender: <span className="text-accent-content">{transaction.sender}</span></p>
              <p className="text-primary-content">Receiver: <span className="text-accent-content">{transaction.receiver}</span></p>
              <p className="text-primary-content">Product ID: <span className="text-accent-content">{transaction.productId.toString()}</span></p>
              <p className="text-primary-content">Value: <span className="text-accent-content">{transaction.valueTimesOneHundred.toString()}</span></p>
              <p className="text-primary-content">Timestamp: <span className="text-accent-content">{transaction.timestamp.toString()}</span></p>
              <p className="text-primary-content">State ID: <span className="text-accent-content">{transaction.stateId.toString()}</span></p>
            </div>
          ))}
          {abiFunction.name === 'getAllUsers' && Array.isArray(result) && result.map((userAddress, index) => (
            <div key={index} className="p-4 rounded-md border border-primary-content shadow-lg-100">
              <p className="text-primary-content">User ID: <span className="text-accent-content">{userAddress}</span></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

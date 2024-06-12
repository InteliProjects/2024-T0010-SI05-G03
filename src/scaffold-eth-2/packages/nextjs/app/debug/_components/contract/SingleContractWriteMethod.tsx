"use client";

import { Abi, AbiFunction } from "abitype";
import { WriteOnlyFunctionForm } from "~~/app/debug/_components/contract";
import { Contract, ContractName, GenericContract, InheritedFunctions } from "~~/utils/scaffold-eth/contract";

export const SingleContractWriteMethod = ({
  onChange,
  deployedContractData,
  functionName, // Adicione o nome da função como uma nova propriedade
}: {
  onChange: () => void;
  deployedContractData: Contract<ContractName>;
  functionName: string; // Adicione o nome da função como uma nova propriedade
}) => {
  if (!deployedContractData) {
    return null;
  }

  // Encontre a função pelo nome ao invés de filtrar todas as funções de escrita
  const functionToDisplay = ((deployedContractData.abi as Abi).find(part => part.type === "function" && part.name === functionName) as AbiFunction);

  // Verifique se a função é de escrita
  const isWriteableFunction = functionToDisplay?.stateMutability !== "view" && functionToDisplay?.stateMutability !== "pure";

  if (!functionToDisplay || !isWriteableFunction) {
    return <>Function not found or is not a write method</>;
  }

  const inheritedFrom = ((deployedContractData as GenericContract)?.inheritedFunctions as InheritedFunctions)?.[functionToDisplay.name];

  return (
    <WriteOnlyFunctionForm
      abi={deployedContractData.abi as Abi}
      key={`${functionToDisplay.name}`}
      abiFunction={functionToDisplay}
      onChange={onChange}
      contractAddress={deployedContractData.address}
      inheritedFrom={inheritedFrom}
    />
  );
};

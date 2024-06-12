import { Abi, AbiFunction } from "abitype";
import { UserReadOnlyFunctionForm } from "~~/app/debug/_components/contract/UserReadOnlyFunctionForm";
import { Contract, ContractName, GenericContract, InheritedFunctions } from "~~/utils/scaffold-eth/contract";

export const SingleContractReadMethod = ({ deployedContractData, functionName }: { deployedContractData: Contract<ContractName>, functionName?: string }) => {
  if (!deployedContractData) {
    return null;
  }

  const functionsToDisplay = (
    ((deployedContractData.abi || []) as Abi).filter(part => part.type === "function") as AbiFunction[]
  )
    .filter(fn => {
      // Modificado para permitir funções sem parâmetros se estiverem procurando por um nome específico
      const isQueryable = fn.stateMutability === "view" || fn.stateMutability === "pure";
      return isQueryable && (!functionName || fn.name === functionName);
    })
    .map(fn => {
      return {
        fn,
        inheritedFrom: ((deployedContractData as GenericContract)?.inheritedFunctions as InheritedFunctions)?.[fn.name],
      };
    })
    .sort((a, b) => (b.inheritedFrom ? b.inheritedFrom.localeCompare(a.inheritedFrom) : 1));

  if (!functionsToDisplay.length) {
    return <>No read methods for the specified function</>;
  }

  return (
    <>
      {functionsToDisplay.map(({ fn, inheritedFrom }) => (
        <UserReadOnlyFunctionForm
          abi={deployedContractData.abi as Abi}
          contractAddress={deployedContractData.address}
          abiFunction={fn}
          key={fn.name}
          inheritedFrom={inheritedFrom}
        />
      ))}
    </>
  );
};

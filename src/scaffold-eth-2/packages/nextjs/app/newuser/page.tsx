"use client";

import { useState } from 'react'; // Importar useState para controle de estado
import type { NextPage } from "next";
import "./style.scss";
import { Header } from "../../components/Header"
import { useDeployedContractInfo } from "../../hooks/scaffold-eth/useDeployedContractInfo";
import { useScaffoldContractWrite } from "../../hooks/scaffold-eth/useScaffoldContractWrite";
import { SingleContractWriteMethod } from "../debug/_components/contract/SingleContractWriteMethod";
import { SingleContractReadMethod } from "../debug/_components/contract/SingleContractReadMethods";

const NewUser: NextPage = () => {
  const contractName = "FairLink";
  const functionNameWrite = "userRegister";
  const functionNameRead = "getAllUsers";
  const [view, setView] = useState(''); // Adiciona estado para controlar a visualização

  const { data: deployedContractData } = useDeployedContractInfo(contractName);
  const { writeAsync, isMining } = useScaffoldContractWrite({
    contractName,
    functionName: functionNameWrite,
    args: [undefined],
  });

  const handleWriteSubmit = async () => {
    try {
      const result = await writeAsync();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Header />
      <h2 className="text-lg mb-4 text-center">Cadastre um usuário no Blockoli</h2>

      <div className="mb-4 flex justify-center">
        <button className="mr-4 px-4 py-2 border border-primary-content rounded" onClick={() => setView('write')}>Cadastrar Usuário</button>
        <button className="px-4 py-2 bg-primary-content text-white rounded" onClick={() => setView('read')}>Visualizar Usuários</button>
      </div>

      {deployedContractData && (
        <>
          {view === 'write' && (
            <SingleContractWriteMethod
              onChange={handleWriteSubmit}
              deployedContractData={deployedContractData}
              functionName={functionNameWrite}
            />
          )}
          {view === 'read' && (
            <SingleContractReadMethod
              deployedContractData={deployedContractData}
              functionName={functionNameRead}
            />
          )}
        </>
      )}
      {isMining && <p>Transação está sendo minerada...</p>}
    </>
  );
};

export default NewUser;

// Importação de componentes e tipos
import { DebugContracts } from "./_components/DebugContracts";
import type { NextPage } from "next";
// Utilitário para obter metadados para fins de SEO e descrição da página
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

// Configuração dos metadados da página para ajudar na indexação e compartilhamento
export const metadata = getMetadata({
  title: "Debug Contracts",
  description: "Debug your deployed 🏗 Scaffold-ETH 2 contracts in an easy way",
});

// Componente de página Debug que fornece uma interface para interagir com contratos para fins de depuração
const Debug: NextPage = () => {
  return (
    <>
      {/* Componente que lista e permite interação com contratos para depuração */}
      <DebugContracts />
      {/* Seção com informações sobre o contrato Blockoli */}
      <div className="text-center mt-8 bg-secondary p-10">
        {/* Título da seção */}
        <h1 className="text-4xl my-0">Contrato Blockoli</h1>
        {/* Instruções ou informações adicionais para o usuário */}
        <p className="text-neutral">
          Você pode interagir com ele por aqui. 
        </p>
      </div>
    </>
  );
};

// Exportação padrão do componente Debug
export default Debug;

// Importação de módulos e componentes necessários
"use client";

import type { NextPage } from "next";
import Image from "next/image";
import { Header } from "../../components/Header"
import Mundo from "../../assets/img/mundo3d.svg";
import Nave from "../../assets/img/nave.svg";

import { RainbowKitCustomConnectButton } from "~~/components/scaffold-eth"; // Botão personalizado para conectar carteira

// Componente Home, que é a página inicial da aplicação
const Home: NextPage = () => {
    // Utiliza o hook useAccount do wagmi para pegar o endereço da carteira conectada

    return (
        <>
            <Header />
            {/* Div principal que organiza o conteúdo visual da página */}
            <div className="flex h-50 w-90%">
                {/* Primeira metade da tela com a imagem do mundo */}
                <div className="flex-1 flex items-center justify-center ">
                    <Image alt="Mundo" src={Mundo} width={350} />
                </div>

                {/* Segunda metade da tela com mensagem de boas-vindas e botão de conexão */}
                <div className="flex-1 flex items-center">
                    <div className="px-5 text-end justify-end">
                        {/* Textos estilizados exibindo a mensagem de boas-vindas */}
                        <h1>
                            <span className="block text-2xl mb-2">Seja Bem-Vindo ao</span>
                            <span className="block text-4xl font-bold text-primary-content">Blockoli</span>
                            <span className="block text-2xl mb-2">Aqui, o mundo das cotações está a seu alcance</span>
                            {/* Botão personalizado para conectar a carteira */}
                            <RainbowKitCustomConnectButton />
                        </h1>
                    </div>
                </div>
            </div>

            {/* Segunda seção da página com conteúdo sobre economia das transações */}
            <div className="flex h-50 w-90%">
                {/* Metade esquerda com mensagens sobre economia nas transações */}
                <div className="flex-1 flex items-center justify-center">
                    <div className="px-5">
                        {/* Textos estilizados falando sobre a economia de transações */}
                        <h1>
                            <span className="block text-2xl mb-2">Decole a economia das transações</span>
                            <span className="block text-4xl font-bold text-primary-content">De Sua Empresa</span>
                            <span className="block text-2xl mb-2">"Empresas que conseguem otimizar a cadeia de suprimentos têm uma economia de até 40%." - Zippia</span>
                        </h1>
                    </div>
                </div>

                {/* Metade direita com imagem de uma nave */}
                <div className="flex-1 flex items-center justify-center">
                    <Image alt="Nave" src={Nave} width={300} />
                </div>
            </div>
        </>
    );
};

export default Home;

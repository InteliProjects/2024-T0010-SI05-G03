// Importação de módulos e componentes necessários
"use client";

import type { NextPage } from "next";
import { useKeenSlider } from "keen-slider/react";
import "./style.css";
import "keen-slider/keen-slider.min.css";
import Amem from "../assets/img/amem-ilustracao.png";
import Alto from "../assets/img/alto.svg";
import Study from "../assets/img/study.png";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  const [sliderRef] = useKeenSlider();

  return (
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide number-slide1">
        <div className="conteudo">
          <h1>BLOCKOLI - Transparência e Confiança no Mercado</h1>
          <p>Blockoli é a inovação da Alliance Consultoria, uma ferramenta de blockchain projetada para revolucionar a transparência de preços no mercado. Com tecnologia avançada, o Blockoli visa estabelecer um padrão de confiança e clareza em transações comerciais.</p>
        </div>
        <Image alt="Mundo" src={Amem} width={500} />
      </div>

      <div className="keen-slider__slide number-slide2">
        <div className="conteudo">
          <h1 className="preto">BLOCKOLI - Visão Clara e Operação Segura</h1>
          <p>Utilizando a tecnologia Blockchain, o Blockoli proporciona uma visão clara do mercado, permitindo aos usuários acessar informações precisas sobre preços. Ele garante transações seguras e um histórico confiável, transformando a maneira como as empresas operam.</p>
        </div>
        <Image alt="Mundo" src={Alto} width={700} />
      </div>

      <div className="keen-slider__slide number-slide3">
        <div className="conteudo">
          <h1 className="preto">BLOCKOLI - Justiça e Transparência de Mercado</h1>
          <p>O Blockoli não só determina o preço médio de mercado de forma justa, mas também oferece um registro transparente e em tempo real das transações. Esse sistema promove a integridade e a equidade no mercado, beneficiando todos os usuários com dados confiáveis.</p>
          <Link               href="/home">
            <div className="btn">Entre e Economize</div>
          </Link>
        </div>
        <Image alt="Mundo" src={Study} width={700} />
      </div>
    </div>
  );
};

export default Home;

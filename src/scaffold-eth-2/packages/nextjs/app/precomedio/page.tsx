"use client";

import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header"

const PrecoMedio: NextPage = () => {
  const [produtos, setProdutos] = useState([]); // Estado inicial vazio para produtos.

  useEffect(() => {
        // Função para carregar dados dos produtos.
    const fetchPrecoMedio = async () => {
      const response = await fetch('http://localhost:3001/produtos/preco-medio');
      if (response.ok) { // Se a resposta for OK, processa os dados.
        const data = await response.json();
        setProdutos(data); // Atualiza o estado com os produtos recebidos.
      }
    };

    fetchPrecoMedio(); // Executa a função ao montar o componente.
  }, []); // Sem dependências, roda uma vez na montagem.

  return (
    <>
      <Header /> {/* Cabeçalho da página */}
      <h1 className="text-lg mb-4 text-center text-primary-content">Veja os Preços Médios</h1>
      {/* Introdução e tabela de preços */}
      <div className="max-w-2xl mx-auto p-4">
        <p className="mb-4">
          As transações são realizadas por diversas empresas e são registradas em um sistema
          baseado em blockchain. A partir desses registros, o preço médio de cada produto é
          calculado considerando todas as transações realizadas. Este processo garante transparência
          e confiabilidade nos dados de preços médios, que são apresentados na tabela abaixo.
        </p>
        <table className="table-auto w-full">
          <thead>
            <tr className="text-left bg-gray-200">
              <th className="px-4 py-2">ID do Produto</th>
              <th className="px-4 py-2">Preço Médio R$</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((produto, index) => (
              <tr key={index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}`}>
                <td className="border px-4 py-2">{produto.product_id}</td>
                <td className="border px-4 py-2">{produto.preco_medio}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};


export default PrecoMedio; // Exporta o componente.
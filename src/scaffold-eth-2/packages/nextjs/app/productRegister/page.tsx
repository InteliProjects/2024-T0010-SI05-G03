"use client";

import { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { Header } from "../../components/Header"; // Importa o componente de cabeçalho

// Definição do tipo de um produto
interface Produto {
  product_id: number;
  nome: string;
  metadado: string;
}

const ProdutoPage: NextPage = () => {
  // Estado para armazenar a lista de produtos, nome e metadado do produto
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [nome, setNome] = useState('');
  const [metadado, setMetadado] = useState('');

  // Efeito para buscar produtos quando o componente é montado
  useEffect(() => {
    const fetchProdutos = async () => {
      const response = await fetch('http://localhost:3001/product');
      if (response.ok) {
        const data: Produto[] = await response.json();
        setProdutos(data);
      }
    };

    fetchProdutos();
  }, []);

  // Função para lidar com a submissão do formulário de registro de produto
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await fetch('http://localhost:3001/product', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome, metadado })
    });

    if (response.ok) {
      const novoProduto: Produto = await response.json();
      setProdutos([...produtos, novoProduto]);
    }
  };

  // Renderização da página
  return (
    <>
      <Header /> {/* Componente de cabeçalho */}
      <div className="bg-base-200 min-h-screen p-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-neutral mb-4">Registre um produto</h1>
          {/* Formulário para registrar um novo produto */}
          <form onSubmit={handleSubmit} className="mb-8">
            <div className="mb-4">
              <label htmlFor="nome" className="block text-base-content">
                Nome
              </label>
              {/* Input para o nome do produto */}
              <input
                id="nome"
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="w-full bg-neutral-content p-2 border rounded border-neutral-content"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="metadado" className="block text-base-content">
                Metadado
              </label>
              {/* Input para o metadado do produto */}
              <input
                id="metadado"
                type="text"
                value={metadado}
                onChange={(e) => setMetadado(e.target.value)}
                className="w-full bg-neutral-content p-2 border rounded border-neutral-content"
              />
            </div>
            {/* Botão para confirmar o registro do produto */}
            <button type="submit" className="px-4 py-2 bg-success text-neutral rounded hover:bg-accent hover:text-accent-content">
              Confirmar
            </button>
          </form>
          {/* Lista de produtos registrados */}
          <div>
            <h2 className="text-2xl font-semibold text-neutral">Produtos</h2>
            <div className="space-y-2">
              {produtos.map((produto) => (
                <div key={produto.product_id} className="p-4 bg-neutral-content rounded">
                  {produto.product_id} - {produto.nome} - {produto.metadado}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProdutoPage;

'use client'
import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import styles from './page.module.css'


export default function Home() {
  const [produtos, setProdutos] = useState([])
  const [geral, setGeral] = useState({})

  const options = {
    title: "Company Performance",
    curveType: "function",
    legend: { position: "bottom" },
  };

  useEffect( () => {
    async function getDadosGrafico() {
      const response = await fetch("http://localhost:3004/avaliacoes/graph")
      const dados = await response.json()
      setProdutos(dados)
    }
    getDadosGrafico()

    async function getDadosGerais() {
      const response = await fetch("http://localhost:3004/dados_gerais")
      const dados = await response.json()
      setGeral(dados)
    }
    getDadosGerais()
  }, [])

  const dados = [
    ["Estrelas", "Avaliação dos Clientes"],
    ["1", 0 ],
    ["2", 0],
    ["3", 0 ],
    ["4", 0 ],
    ["5", 0],
  ];

  let somaAvaliacoes = 0
  produtos.forEach(produto => {
    somaAvaliacoes += produto.num
  })

  produtos.forEach(produto => {
    dados[produto.estrelas][1] = ((produto.num / somaAvaliacoes) * 10).toFixed(0)
  })

  return (
   <>
   <section className={styles.page}>
    <div className={styles.box}>
      <div className="container">
        <h2 className="mt-4 mb-4">Visão Geral do Sistema</h2>

        <span className="btn btn-outline-secondary btn-md">
          <p className="badge bg-dark">{geral.clientes}</p>
          <p>Nº de Clientes Cadastrados</p>
        </span>
        <span className="btn btn-outline-secondary btn-md mx-2">
          <p className="badge bg-dark">{geral.roupas}</p>
          <p>Nº de Produtos Cadastrados</p>
        </span>
        <span className="btn btn-outline-secondary btn-md me-2">
          <p className="badge bg-dark">
            R$ {geral.media && Number(geral.media.preco).toLocaleString("pt-br", { minimumFractionDigits: 2 })}
          </p>
          <p>Preço Médio dos Produtos</p>
        </span>
        <span className="btn btn-outline-secondary btn-md me-2">
          <p className="badge bg-dark">{geral.avaliacoes}</p>
          <p>Nº Total de Avaliações</p>
        </span>
        <span className="btn btn-outline-secondary btn-md">
          <p className="badge bg-dark">{geral.avaliacoes_dia}</p>
          <p>Nº de Avaliações do Dia</p>
        </span>
      </div>
    </div>
    
    <div className={styles.second}>
     <div className={styles.box2}>
     <Chart
        chartType="Bar"
        width={700}
        height="450px"
        data={dados}
        options={{colors: ['#343a40', '#6c757d']}}
      />
      </div>

      <div className={styles.box3}>
    
      </div>
      </div>
      </section>
      </>

  

)
}

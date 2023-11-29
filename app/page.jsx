'use client'

import ItemProd from "@/components/ItemProd"
import { useEffect, useState } from "react"

export default function Home() {
  const [produtos, setProdutos] = useState([])

  useEffect(() => {
    async function getProdutos() {
      try {
        const response = await fetch("http://localhost:3004/roupas")
        if (!response.ok) {
          throw new Error(`Erro na solicitação: ${response.status}`)
        }
        const dados = await response.json()
        setProdutos(dados)
        console.log(dados)
      } catch (error) {
        console.error(error)
      }
    }
    getProdutos()
  }, [])
  
  const listaProdutos = produtos.map(produtos => (
    <ItemProd key={produtos.id}
      produtos={produtos}
    />
  ))

  return (
    <div className="container mt-3">
      <div class="row row-cols-2 row-cols-sm-3 row-cols-md-5 g-4">
        {listaProdutos}
      </div>
    </div>
  )
}

'use client'
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import Estrelas from '@/components/Estrelas'
import { useContext } from "react"
import { ClienteContext } from "@/contexts/cliente"

export default function Avaliar() {
  const params = useParams()
  const [roupas, setprodutos] = useState({})
  const { clienteId } = useContext(ClienteContext)

  const { register, handleSubmit, reset } = useForm({
    defaultValues: { estrelas: 3 }
  })

  useEffect(() => {
    async function getProdutos() {
      const response = await fetch("http://localhost:3004/roupas/" + params.id)
      const dado = await response.json()
    
      setprodutos({
        id: dado.id,
        nome: dado.nome,
        marca: dado.marca,
        preco: dado.preco,
        cor: dado.cor,
        foto: dado.foto,
        descricao: dado.descricao,
        soma: dado.soma,
        num: dado.num
      })
    }
    getProdutos()
    
  }, [])



  async function enviaComentario(data) {
    //    const avaliacao = {...data, cliente_id: clienteId, filme_id: filme.id, data: new Date()}
        const avaliacao = {...data, cliente_id: clienteId, roupa_id: roupas.id}
    
        const avalia = await fetch("http://localhost:3004/avaliacoes",
          {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(avaliacao)
          },
        )
    
        if (avalia.status == 201) {      
          alert("Ok! Avaliação cadastrada com sucesso")
          reset()
        } else {
          alert("Erro no cadastro da avaliação...")
        }
      }
    

  // async function enviaComentario(data) {
  //   const avaliacao = {...data, cliente_id: clienteId, roupa_id: roupas.id, data: new Date()}

  //   const avalia = await fetch("http://localhost:3004/avaliacoes",
  //     {
  //       method: "POST",
  //       headers: { "Content-type": "application/json" },
  //       body: JSON.stringify(avaliacao)
  //     },
  //   )

  //   const altera = {soma: Number(roupas.soma) + Number(data.estrelas), num: Number(roupas.num) + 1}
  //   const atualiza_estrelas = await fetch("http://localhost:3004/roupas/"+roupas.id,
  //     {
  //       method: "POST",
  //       headers: { "Content-type": "application/json" },
  //       body: JSON.stringify(altera)
  //     },
  //   )

  //   if (avalia.status == 201 && atualiza_estrelas.status == 200) {
  //     alert("Ok! Avaliação cadastrada com sucesso")
  //     reset()
  //   } else {
  //     alert("Erro no cadastro da avaliação...")
  //   }
  // }

  return (
    <div className="container ">
      <div className="row mt-3">
        <div className="col">
          <div className="card">
            <img src={roupas.foto} alt="roupas" width={300} className="mx-auto d-block mt-1" />
            <div className="card-body">
              <h5 className="card-title">
                {roupas.nome}
              </h5>
              <p className="card-text">
                {roupas.marca} - {roupas.cor}
              </p>
              <p className="card-text small">
                Preço: {roupas.preco}
              </p>
              <p className="card-text small">
                {roupas.descricao}
              </p>
              <Estrelas soma={roupas.soma} num={roupas.num} />
              <span className="ms-2">{roupas.num} avaliações</span>
            </div>
          </div>
        </div>
        <div className="col ">
          <div className="card">
            <form className="card-body" onSubmit={handleSubmit(enviaComentario)}>
              <h3 className="card-title">Deixe sua opiniao</h3>
              <hr />
              <div class="my-4">
                <label for="comentario" class="form-label fs-5">Seu Comentário:</label>
                <textarea class="form-control form-control-lg" id="comentario" rows="3"
                  {...register("comentario")}></textarea>
              </div>
              <div class="mb-3">
                <label for="estrelas" class="form-label fs-5">Sua Avaliação (Estrelas)</label>
                <select class="form-select form-select-lg mb-3 ronded" {...register("estrelas")}>
                  <option value="1">1 Estrela</option>
                  <option value="2">2 Estrelas</option>
                  <option value="3">3 Estrelas</option>
                  <option value="4">4 Estrelas</option>
                  <option value="5">5 Estrelas</option>
                </select>
              </div>
              
              <div class="d-grid gap-2 col-4 ms-auto">
                <input type="submit" className="btn btn-success btn-lg mt-3" value="Enviar" />
                

                
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
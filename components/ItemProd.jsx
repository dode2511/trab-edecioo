import { useContext } from "react"
import { ClienteContext } from "@/contexts/cliente"
import Estrelas from "./Estrelas"
import Link from "next/link"


export default function ItemProd(props) {

  const { clienteId } = useContext(ClienteContext)

  return (
    <div className="col ">
      <div className="card shadow-lg">
        <img src={props.produtos.foto} className="card-img-top h-100" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.produtos.nome}</h5>
          <p className="card-text">
            {props.produtos.marca} - {props.produtos.cor} - {props.produtos.preco}
          </p>
          <p className="small">
            {props.produtos.descricao}
          </p>
        </div>
        {clienteId &&
          <div>
            <Estrelas soma={props.produtos.soma} num={props.produtos.num} />
            <div className="float-end">
           
              <Link href={"/avaliar/"+props.produtos.id}>
                <i class="bi bi-chat-right-heart text-black fs-3 me-2" style={{ cursor: 'pointer' }}></i>
              </Link>
            </div>
          </div>
        }
      </div>
    </div >
  )
}
'use client'
import { useContext } from "react"
import { ClienteContext } from "@/contexts/cliente"


import Link from "next/link"

export default function Titulo() {
  const { clienteNome, mudaId, mudaNome ,admStatus,mudaStatus } = useContext(ClienteContext)

  function logout() {
    if (confirm("Confirma a saída do sistema? ")) {
      mudaId(null)
      mudaNome("")
      mudaStatus(false)
      localStorage.removeItem("cliente_logado")
    }
  }

console.log(admStatus);


  return (
    
    <nav className="navbar bg-white shadow-lg">
      <div className="container-fluid">
        <div className="col">
          <Link className="navbar-brand text-black" href="/">
            <img src="./logo.png" alt="Logo"
              width="300" height="48" className="float-start d-inline-block align-text-top" />
            
          </Link>
        </div>
{/*         
        <div className="col input-group my-3">
          <input type="text" className="form-control rounded "  />
          <button className="btn btn-gray text-black" type="button"><i class="bi bi-search"></i></button>
        </div> */}
        <div className="col-sm-2">
        <h5 className="text-white text-end ">
          
          {
            clienteNome && admStatus ?
            <Link href="/grafic"><i class="bi bi-bar-chart-line text-black "></i></Link> :
              <i></i>
          }
          </h5>
          </div>
          <div className="col-sm-2">
        <h5 className="text-white text-center ">
          
          {
            clienteNome && admStatus ?
            <Link href="/avaliacoes"><i class="bi bi-bookmark-star-fill text-black"></i></Link> :
              <i></i>
          }
          </h5>
          </div>
          <div className="col-sm-2">
          <h5 className="text-white text-start ">
          {clienteNome ? clienteNome : ""}
          {
            clienteNome ?
              <i class="bi-box-arrow-right text-black" style={{cursor: 'pointer'}} onClick={logout}></i> :
              <Link href="/login"><i class=" bi bi-person text-black bi-4x "></i></Link>
          }
          </h5>
        </div>

      </div>
    </nav>
  )
}
'use client'
import { useContext } from "react"
import { ClienteContext } from "@/contexts/cliente"


import Link from "next/link"

export default function Titulo() {
  const { clienteNome, mudaId, mudaNome } = useContext(ClienteContext)

  function logout() {
    if (confirm("Confirma a saída do sistema? ")) {
      mudaId(null)
      mudaNome("")
      localStorage.removeItem("cliente_logado")
    }
  }




  return (
    <nav className="navbar bg-white shadow-lg">
      <div className="container-fluid">
        <div className="col">
          <Link className="navbar-brand text-black" href="/">
            <img src="./logo.png" alt="Logo"
              width="300" height="48" className="float-start d-inline-block align-text-top" />
            
          </Link>
        </div>
        
        <div className="col input-group my-3">
          <input type="text" className="form-control rounded "  />
          <button className="btn btn-gray text-black" type="button"><i class="bi bi-search"></i></button>
        </div>
        <div className="col">
          <h5 className="text-white text-center ">
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
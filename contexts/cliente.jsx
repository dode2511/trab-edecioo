'use client'
import { createContext, useState } from "react"


export const ClienteContext = createContext()

function ClienteProvider({children}) {

  let inicial_id = null
  let inicial_nome = ""
  let ADM = false
 
  if (localStorage.getItem("cliente_logado")) {
    const cliente = JSON.parse(localStorage.getItem("cliente_logado"))
    inicial_id = cliente.id
    inicial_nome = cliente.nome
    //console.log(cliente.adm);
    ADM = cliente.adm
  }

  const [clienteId, setClienteId] = useState(inicial_id)
  const [clienteNome, setClienteNome] = useState(inicial_nome)
  const [admStatus, setAdmStatus] = useState(ADM)

  function mudaId(id) {
    setClienteId(id)
  }

  function mudaNome(nome) {
    setClienteNome(nome)
  }

  function mudaStatus(adm) {
    setAdmStatus(adm)
  }

  return (
    
    <ClienteContext.Provider value={{clienteId, clienteNome,admStatus, mudaId, mudaNome,mudaStatus}}>
      {children}
    </ClienteContext.Provider>
  )
}

export default ClienteProvider
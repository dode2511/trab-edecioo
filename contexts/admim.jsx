'use client'
import { createContext, useState } from "react"

export const AdmContext = createContext()

function AdmProvider({children}) {

  let inicial_id = null
  let inicial_nome = ""

  if (localStorage.getItem("adm_logado")) {
    const adm = JSON.parse(localStorage.getItem("adm_logado"))
    inicial_id = adm.id
    inicial_nome = adm.nome
  }

  const [admID, setADMId] = useState(inicial_id)
  const [admNome, setADMNome] = useState(inicial_nome)

  function mudaId2(id) {
    setADMId(id)
  }

  function mudaNome2(nome) {
    setADMNome(nome)
  }

  return (
    <AdmContext.Provider value={{admID, admNome, mudaId2, mudaNome2}}>
      {children}
    </AdmContext.Provider>
  )
}

export default AdmProvider
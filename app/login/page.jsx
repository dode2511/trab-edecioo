'use client'
import Link from 'next/link'
import './login.css'
import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import { ClienteContext } from '@/contexts/cliente'
import { useRouter } from 'next/navigation'

export default function Login() {
  const { register, handleSubmit } = useForm()
  const { mudaId, mudaNome } = useContext(ClienteContext)

  const router = useRouter()

  async function verificaLogin(data) {
      
    
        const response = await fetch("http://localhost:3004/login",
          {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({email: data.email, senha: data.senha ,adm:data.adm})
          },
        )
        
        if (response.status == 401) {
          alert("Não está cadastrado")
        } else {
          const cliente = await response.json()
          mudaId(cliente.id)
          mudaNome(cliente.nome)
          localStorage.setItem("cliente_logado", JSON.stringify({id: cliente.id, nome: cliente.nome,adm:cliente.adm}))
          router.push("/")
        }
      }

  return (
      <div className='login templete d-flex justify-content-center align-items-center 100-w vh-100 bg-white'>
        <div className='10-w p-5 rounded bg-white shadow-lg p-3 mb-5' >
          <form  onSubmit={handleSubmit(verificaLogin)}>
          <h3>Login</h3>
          <div className='mb-2'> 
            <label htmlFor="email">Email</label>
            <input type="email" className='form-control' placeholder='Email'  required {...register("email")}/>
          </div>
          <div className='mb-2'>
            <label htmlFor="senha" >Senha</label>
            <input type="password" className='form-control' placeholder='Senha' required {...register("senha")} />
          </div>
          
          <div className='d-grid'>
            <button className='btn btn-primary'  type="submit">Entrar</button>
          </div>
          
          </form>
        </div>


      </div>
  )
}



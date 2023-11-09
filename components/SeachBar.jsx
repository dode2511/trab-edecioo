import { useState } from "react";





export const SearchBar = () =>{


    const [input,setInput] = useState("")


const fetchData = (value) => {
     fetch("http://localhost:3004/produtos").then((response) =>  response.json()).then((json)=>{
        const results = json.filter((produtos)=> {
            return produtos && produtos.name && produtos.name.toLowerCase().includes(value)
        })
     })
}

const handleChange = (value)=> {
    setInput(value)
    fetchData(value)
}


return(
    <div className="col input-group my-3">
          <input type="text" className="form-control rounded "  value={input} 
           onChange={(e)=> handleChange(e.target.value)}/>
          <button className="btn btn-gray text-black" type="button"><i class="bi bi-search"></i></button>
        </div>
)


}
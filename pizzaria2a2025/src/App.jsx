import {useState} from 'react'

function App () {

  const [nome, setNome] = useState ('Ronaldo');
  return (
    <div>
      <h3> Vou descobrir seu nome </h3>
        <input className = "Nome" 
        name="nome"
        placeholder="digite seu nome"
        onChange= {(e)=> setNome(e.target.value)}
        type="text" />
        <button onClick={()=>{alert(nome)}}>
        Clique aqui seu nutela
        </button>
    </div>
  )
}

export default App
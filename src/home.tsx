import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './teddy-test.css'

function Home() {

   const [username, setUsername] = useState("")

  useEffect(() => {
    localStorage.setItem('username', JSON.stringify(username));
  }, [username]); 

  return (
    <>
      <div>
       <p className='welcome'>Olá, seja bem-vindo!</p>
      </div>
      <div className='welcome-wrap'>
        <input 
          value={username}
          onChange={e => setUsername(e.target.value)} 
          className='welcome-input' 
          placeholder='Digite o seu nome'
        >
        </input>
        <Link to="/customers" className='button welcome-button'>Entrar</Link>
      </div>
    </>
  )
}

export default Home

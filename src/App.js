import { useState } from 'react';
import './styles.css'
import api from './services/api.js'

function App() {

  const [advice, setAdvice] = useState("")

  async function handlerAdvice(){
    try{
      const response = await api.get()
      setAdvice(response.data)
    }
    catch{
      alert("Error!");
    }
  }

  return (
    <div className="container">
      <h1 className="title">Peça um conselho randomico!</h1>
      <button className="adviceButton" onClick={handlerAdvice}>Random Advice!</button>
        {
          Object.keys(advice).length > 0 &&(
            <div className="adviceScreen">
              <span>{advice.slip.id}</span>
              <span>{advice.slip.advice}</span>
            </div>
          )
        }
    </div>
  );
}

export default App;

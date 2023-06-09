import { useState } from 'react';
import './App.css';

// Components
import Formulario from './components/formulario/Formulario'
import Card from './components/card/Card';

function App() {

  const [nome, setNome] = useState("NOME SOBRENOME")
  const [numeroCard, setNumeroCard] = useState("0000 0000 0000 0000")
  const [mes, setMes] = useState("00")
  const [ano, setAno] = useState("0000")
  const [cvc, setCvc] = useState("000")

  const [clicando, setClicando] = useState(false)
 
  return (
    <div className="App">
     <div className='app-card-style'>
      <Card 
        nome={nome}
        numeroCard={numeroCard}
        mes={mes}
        ano={ano}
        cvc={cvc}
        clicando={clicando}
      />
     </div>
     <div className='app-form-style'>
      <Formulario 
        setNome={setNome}
        setNumeroCard={setNumeroCard}
        setMes={setMes}
        setAno={setAno}
        setCvc={setCvc}
        setClicando={setClicando}
      />
     </div>
    </div>
  );
}

export default App;
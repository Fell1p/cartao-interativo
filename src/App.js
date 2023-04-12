import { useState } from 'react';
import './App.css';
import Card from './components/card/Card';

// Components
import Formulario from './components/formulario/Formulario'

function App() {

  const [nome, setNome] = useState("NOME SOBRENOME")
  const [numeroCard, setNumeroCard] = useState("0000 0000 0000 0000")
  const [mes, setMes] = useState("00")
  const [ano, setAno] = useState("00")
  const [cvc, setCvc] = useState("000")
 
  return (
    <div className="App">
     <div className='app-card-style'>
      <Card 
        nome={nome}
        numeroCard={numeroCard}
        mes={mes}
        ano={ano}
        cvc={cvc}
      />
     </div>
     <div className='app-form-style'>
      <Formulario 
        setNome={setNome}
        setNumeroCard={setNumeroCard}
        setMes={setMes}
        setAno={setAno}
        setCvc={setCvc}
      />
     </div>
    </div>
  );
}

export default App;

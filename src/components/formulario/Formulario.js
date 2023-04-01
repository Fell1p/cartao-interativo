import React from 'react'
import "./Formulario.css"

const Formulario = ({ setNome, setNumeroCard, setMes, setAno, setCvc }) => {
  return (
    <div className='form-style' >
      <form>
        <p>Nome do Titular</p>
        <label htmlFor="nome">
          <input
            className='form-name-style' 
            type="text"
            name="nome"
            placeholder="ex. Vander Jando"
            onChange={(e) => setNome(e.target.value)}
          />          
        </label>
        <p>Numero do Cartão</p>
        <label htmlFor="numeroCartao" className='numeroCartao'>
          <input
            className='numeroCartao-style'
            type="number"
            name='numeroCartao'
            placeholder="ex. 0000 0000 0000 0000"
            onChange={(e) => setNumeroCard(e.target.value)}
          />
        </label>
        <p>Validade</p>
        <label htmlFor="validade">
          <input 
            className='mm-style'
            type="number"
            name='validade'
            placeholder="MM"
            onChange={(e) => setMes(e.target.value)}
          />
          <input 
            className='yy-style'
            type="number"
            placeholder="YY"
            onChange={(e) => setAno(e.target.value)}
          />
        </label>
        <p>CVC</p>
        <label htmlFor="seguranca">
          <input 
            type="number" 
            name='seguranca'
            cvc="cvc"
            placeholder='ex. 000'
            onChange={(e) => setCvc(e.target.value)}
          />
        </label>
      </form>
    </div>
  )
}

export default Formulario
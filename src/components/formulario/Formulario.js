import React from 'react'

const Formulario = ({ setNome, setNumeroCard, setMes, setAno, setCvc }) => {
  return (
    <div>
      <form>
        <p>Nome do Titular</p>
        <label htmlFor="nome">
          <input 
            type="text"
            name="nome"
            placeholder="ex. Vander Jando"
            onChange={(e) => setNome(e.target.value)}
          />
          <p>Numero do Cartão</p>
        </label>
        <label htmlFor="numeroCartao">
          <input
            type="number"
            name='numeroCartao'
            placeholder="ex. 0000 0000 0000 0000"
            onChange={(e) => setNumeroCard(e.target.value)}
          />
        </label>
        <p>Validade</p>
        <label htmlFor="validade">
          <input 
            type="number"
            name='validade'
            placeholder="MM"
            onChange={(e) => setMes(e.target.value)}
          />
          <input 
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
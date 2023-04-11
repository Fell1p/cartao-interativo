import React from 'react'
import { IMaskInput } from 'react-imask'
import "./Formulario.css"

const Formulario = ({ setNome, setNumeroCard, setMes, setAno, setCvc }) => {
  return (
    <div className='form-container'>
      <form>
        <div className='form-style' >
          <p>Nome do Titular</p>
          <label htmlFor="nome">
            <input          
              type="text"
              name="nome"
              placeholder="ex. Vander Jando"
              onChange={(e) => setNome(e.target.value)}
            />          
          </label>
        </div>
        <div className='form-style' > 
          <p>Numero do Cartão</p>
          <label htmlFor="numeroCartao">
            <IMaskInput
              mask="0000 0000 0000 0000"
              name='numeroCartao'
              placeholder="ex. 0000 0000 0000 0000"
              onChange={(e) => setNumeroCard(e.target.value)}
            />
          </label>
        </div>
        <div className='container-validade-cvc' >
          <div className='slyte-validade-container'>
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
          </div>
          <div className='style-cvc-container' >
            <p>CVC</p>
            <label htmlFor="seguranca">
              <input 
                className='cvc-style'
                type="number" 
                name='seguranca'
                cvc="cvc"
                placeholder='ex. 000'
                onChange={(e) => setCvc(e.target.value)}
              />
            </label>
          </div>
        </div>
        <button>Enviar</button>
      </form>
    </div>
  )
}

export default Formulario
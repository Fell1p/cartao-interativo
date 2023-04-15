import React from 'react'
import { IMaskInput } from 'react-imask'
import "./Formulario.css"

const Formulario = ({ setNome, setNumeroCard, setMes, setAno, setCvc }) => {

const formEnvio = (e) => {
  e.preventDefault();
  console.log("Formulario enviado!")
}



  return (
    <div className='form-container'>
      <form onSubmit={formEnvio}>
        <div className='form-style' >
          <p>Nome do Titular</p>
          <label htmlFor="nome">
            <input          
              type="text"
              name="nome"
              placeholder="ex. Vander Jando"
              onChange={(e) => setNome(e.target.value)}
              required
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
              required
            />
          </label>
        </div>
        <div className='container-validade-cvc' >
          <div className='slyte-validade-container'>
              <p>Validade</p>
              <label htmlFor="validade">
                <IMaskInput 
                  className='mm-style'
                  mask="00"
                  name='validade'
                  placeholder="MM"
                  onChange={(e) => setMes(e.target.value)}
                  required
                />            
                <IMaskInput
                  className='yy-style'
                  mask="00"
                  placeholder="YY"
                  onChange={(e) => setAno(e.target.value)}
                  required
                />
              </label>
          </div>
          <div className='style-cvc-container' >
            <p>CVC</p>
            <label htmlFor="seguranca">
              <IMaskInput
                className='cvc-style'
                mask="000"
                name='seguranca'
                cvc="cvc"
                placeholder='ex. 000'
                onChange={(e) => setCvc(e.target.value)}
                required
              />
            </label>
          </div>
        </div>
        <button type='submit'>Enviar</button>
      </form>
    </div>
  )
}

export default Formulario
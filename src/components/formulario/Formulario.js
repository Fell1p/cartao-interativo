import { IMaskInput } from 'react-imask'
import "./Formulario.css"
import Imagem from '../../Imgs/verificado.png'
import { useState } from 'react'

const Formulario = ({ setNome, setNumeroCard, setMes, setAno, setCvc, setClicando }) => {

  const [sucesso, setSucesso] = useState(true)

  const formEnvio = (e) => {
    e.preventDefault();
    console.log("Formulario enviado!")
  }

  const cliqueTrue = () => {
        setClicando(true) 
  } 

  const cliqueFalse = () => {
    setClicando(false)  
  }

  return (
    <div>
      {sucesso && (
      <div className='form-container'>
        <form onSubmit={formEnvio}>
          <div className='form-style' >
            <p>Nome do Titular</p>
            <label htmlFor="nome">
              <input          
                type="text"
                name="nome"
                placeholder="ex. Vander R Jando"
                onChange={(e) => setNome(e.target.value)}
                maxLength={19}
                required
                onFocus={cliqueTrue}
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
                onFocus={cliqueTrue}
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
                    onFocus={cliqueTrue}
                  />            
                  <IMaskInput
                    className='yy-style'
                    mask="00"
                    placeholder="YY"
                    onChange={(e) => setAno(e.target.value)}
                    required
                    onFocus={cliqueTrue}
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
                  onFocus={cliqueFalse}
                />
              </label>
            </div>
          </div>
          <button type='submit' onClick={() => setSucesso(false)}>Enviar</button>
        </form>
      </div>
      )}
      {!sucesso && (
        <div className='success-style'>
        <img src={Imagem} className='img-form-style' alt='' />
      </div>
      )}
    </div>
  )
}

export default Formulario
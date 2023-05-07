import { IMaskInput } from 'react-imask'
import "./Formulario.css"
import Imagem from '../../Imgs/verificado.png'
import { useState } from 'react'

const Formulario = ({ setNome, setNumeroCard, setMes, setAno, setCvc, setClicando }) => {

  const [sucesso, setSucesso] = useState(false)

  const [mes, setMes2] = useState(0)
  const [ano, setAno2] = useState(0)

  const validacao = () => {
    console.log(sucesso)
    if (mes > 12 || ano < 23){
      window.alert('Validade incorreta')
    } else {
      setSucesso(true)
    }
  }

  const monitoraMes = (e) => {
    setMes(e.target.value)
    setMes2(e.target.value)
  }

  const monitoraAno = (e) => {
    setAno(e.target.value)
    setAno2(e.target.value)
  }
  
  const cliqueTrue = () => {
    setClicando(true) 
  } 

  const cliqueFalse = () => {
    setClicando(false)  
  }

  const recarregarPag = () => {
    window.location.reload(true);
  }

  return (
    <div>
      {!sucesso && (
      <div className='form-container'>
        <form onSubmit={validacao}>
          <div className='form-style' >
            <p>Nome do Titular</p>
            <label htmlFor="nome">
              <input          
                type="text"
                name="nome"
                placeholder="ex. Nome Sobrenome"
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
                minLength={16}
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
                    onChange={monitoraMes}                    
                    required
                    onFocus={cliqueTrue}
                  />
                  <IMaskInput
                    className='yy-style'
                    mask="00"
                    placeholder="YY"
                    onChange={monitoraAno}
                    required
                    onFocus={cliqueTrue}
                  />
                </label>
                {}
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
                  minLength={3}
                />
              </label>
            </div>
          </div>
          <button type='submit'>Enviar</button>
        </form>
      </div>
      )}
      {sucesso && (
        <div className='success-style'>
        <img src={Imagem} className='img-form-style' alt='' />
        <p className='msg-success'>Cartão Cadastrado com sucesso!</p>
        <button onClick={recarregarPag}>Cadastrar novo cartão</button>
      </div>
      )}
    </div>
  )
}

export default Formulario
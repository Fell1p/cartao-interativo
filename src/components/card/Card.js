import React from 'react'
import './Card.css'

const Card = ({ nome, numeroCard, mes, ano, cvc }) => {

    function cartaoInfos(cardNome, cardNumero, cardMes, cardAno, cardCVC) {
        return `${cardNome || cardNumero || cardMes || cardAno || cardCVC}`
    }

  return (
    <div className='card-style-container' >
      <div className='bandeira-style-continer'>
        <div className='bandeiraSolida-style'></div>
        <div className='bandeiraTransparente-style'></div>
      </div>
      <div className='style-numero-card' >
        {numeroCard ? (<p>{cartaoInfos(numeroCard)}</p>) : (<p>0000 0000 0000 0000</p>)}
      </div>
      <div className='styles-nome-card' >
        {nome ? (<p>{cartaoInfos(nome)}</p>) : (<p>Nome Sobrenome</p>)}
      </div>
      <div className='card-validade-style' >
        {mes ? (<p>{cartaoInfos(mes)}/</p>) : (<p>00</p>)}
        {ano ? (<p>{cartaoInfos(ano)}</p>) : (<p>00</p>)}
      </div>
      <div className='style-cvc-card' >
        {cvc ? (<p>{cartaoInfos(cvc)}</p>) : (<p>000</p>)}
      </div>
    </div>
  )
}

export default Card
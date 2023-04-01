import React from 'react'
import './Card.css'

const Card = ({ nome, numeroCard, mes, ano, cvc }) => {

    function cartaoInfos(cardNome, cardNumero, cardMes, cardAno, cardCVC) {
        return `${cardNome || cardNumero || cardMes || cardAno || cardCVC}`
    }

  return (
    <div>
      {nome ? (<p>{cartaoInfos(nome)}</p>) : (<p>Nome Sobrenome</p>)}
      {numeroCard ? (<p>{cartaoInfos(numeroCard)}</p>) : (<p>0000 0000 0000 0000</p>)}
      <div className='card-validade-style' >
        {mes ? (<p>{cartaoInfos(mes)}/</p>) : (<p>00</p>)}
        {ano ? (<p>{cartaoInfos(ano)}</p>) : (<p>00</p>)}
      </div>
      {cvc ? (<p>{cartaoInfos(cvc)}</p>) : (<p>000</p>)}
    </div>
  )
}

export default Card
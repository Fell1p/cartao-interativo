import React from 'react'

const Card = ({ nome, numeroCard, mes, ano, cvc }) => {

    function cartaoInfos(cardNome, cardNumero, cardMes, cardAno, cardCVC) {
        return `${cardNome || cardNumero || cardMes || cardAno || cardCVC}`
    }

  return (
    <div>
      <p>{cartaoInfos(nome)}</p>
      <p>{cartaoInfos(numeroCard)}</p>
      <p>{cartaoInfos(mes)}/{cartaoInfos(ano)}</p>
      <p>{cartaoInfos(cvc)}</p>
    </div>
  )
}

export default Card


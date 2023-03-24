import React from 'react'

const Card = ({ nome, numeroCard, mes, ano, cvc }) => {

    function cartaoInfos(cardNome, cardNumero, cardMes, cardAno, cardCVC) {
        return `${cardNome || cardNumero || cardMes || cardAno || cardCVC}`
    }

  return (
    <div>
      {nome ? (<p>{cartaoInfos(nome)}</p>) : (<p>Nome Sobrenome</p>)}
      {numeroCard ? (<p>{cartaoInfos(numeroCard)}</p>) : (<p>0000 0000 0000 0000</p>)}
      {<p>{cartaoInfos(mes)}/{cartaoInfos(ano)}</p>}
      {<p>{cartaoInfos(cvc)}</p>}
    </div>
  )
}

export default Card
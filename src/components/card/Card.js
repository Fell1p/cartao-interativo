import React, { useEffect } from 'react'
import './Card.css'

const Card = ({ nome, numeroCard, mes, ano, cvc, clicando }) => {

    function cartaoInfos(cardNome, cardNumero, cardMes, cardAno, cardCVC) {
        return `${cardNome || cardNumero || cardMes || cardAno || cardCVC}`
    }

    useEffect(() => {
      const flipper = document.querySelector(".flipper")
    
      if(clicando !== false){
        flipper.classList.add("giro")
      }
      
      if (clicando !== true){
        flipper.classList.remove("giro")
      }

    }, [clicando])

  return (
    <div className='flip-container'>
      <div className='flipper'>
          <div className='front'>            
            <div className='bandeira-style-continer'>
              <div className='bandeiraSolida-style'></div>
              <div className='bandeiraTransparente-style'></div>
            </div>
            <div className='style-numero-card' >
              {numeroCard ? (<p>{cartaoInfos(numeroCard)}</p>) : (<p>0000  0000  0000  0000</p>)}
            </div>
            <div className='container-name-validade'>
              <div className='styles-nome-card' >
                {nome ? (<p>{cartaoInfos(nome)}</p>) : (<p>NOME SOBRENOME</p>)}
              </div>
              <div className='card-validade-style' >
                {mes ? (<p>{cartaoInfos(mes)}/</p>) : (<p>00</p>)}
                {ano ? (<p>{cartaoInfos(ano)}</p>) : (<p>00</p>)}
              </div>
            </div>
          </div>
          <div className='back'>            
            <div className='tarja-style'></div>
            <div className='style-cvc-card'>
                {cvc ? (<p className='cvc'>{cartaoInfos(cvc)}</p>) : (<p className='cvc'>000</p>)}
            </div>
            <span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, asperiores?
            </span>            
          </div>
      </div>
    </div>
  )
}

export default Card
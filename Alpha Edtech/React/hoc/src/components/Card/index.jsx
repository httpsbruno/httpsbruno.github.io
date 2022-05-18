import React from 'react'
//import * as S from './styles.js'

const Card = ({character}) => {
  return <div >
    
    <div className={'card ' + character.status.toLowerCase() + '-bg'}>
    <img  src={ character.image} alt={character.name}/>
    <strong>{character.name}</strong>
    <p>{character.species}</p>
    <p>{character.gender}</p>
    {character.status === 'Dead'? <h2 className='faixa dead'>MORTO</h2>: 
     character.status === 'unknown'? <h2 className='faixa unknown'>DESCONHECIDO</h2> : false}
    </div>
  </div>;
};

export default Card
import React from 'react'
import styled from 'styled-components';

const Div = styled.div`
  &.card{
    display: flex;
    width: -moz-fit-content;
    width: fit-content;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5px;
    border-radius: 5px;
  }

  &.alive-bg{
    background-color: rgb(127, 161, 150);
  }

  &.dead-bg {
    background-color: rgb(179, 112, 112);
  }

  &.unknown-bg {
    background-color: rgb(139, 148, 145);
  }
`
const Img = styled.img`
  max-width: 180px;
  border-radius: 50%;
  margin: 15px;
`

const H2 = styled.h2`
  &.faixa {
    position: absolute;
    width: 200px;
    text-align: center;
    border-radius: 10px;
    color: aliceblue;
  }

  &.dead {
    background-color: rgb(194, 71, 71);
  }

  &.unknown {
    background-color: rgb(109, 108, 97);
  }
`

const Card = ({character}) => {
  return <div >
    
    <Div className={'card ' + character.status.toLowerCase() + '-bg'}>
    <Img  src={ character.image} alt={character.name}/>
    <strong>{character.name}</strong>
    <p>{character.species}</p>
    <p>{character.gender}</p>
    {character.status === 'Dead'? <H2 className='faixa dead'>MORTO</H2>: 
     character.status === 'unknown'? <H2 className='faixa unknown'>DESCONHECIDO</H2> : false}
    </Div>
  </div>;
};

export default Card
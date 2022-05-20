import React from 'react'
import Card from '../Card';
import LoadingHOC from '../../HOC/LoadingHOC';
import styled from 'styled-components';

const Div = styled.div`
  &.content{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    flex-direction: row;
    width: 80%;
    margin: auto; 
  }
`
function CardList({ characters }) {
    return (
        <Div className="content">
            {characters.map(c => <Card key={c.id} character={c}/>)}
        </Div>
    );
}

export default LoadingHOC(CardList)
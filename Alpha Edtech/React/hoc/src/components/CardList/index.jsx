import React from 'react'
import Card from '../Card';
import LoadingHOC from '../../HOC/LoadingHOC';
//import * as S from './styles.js'


function CardList({ characters }) {
    return (
        <div className="content">
            {characters.map(c => <Card key={c.id} character={c}/>)}
        </div>
    );
}

export default LoadingHOC(CardList)
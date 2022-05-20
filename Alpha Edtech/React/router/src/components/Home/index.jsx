import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Div = styled.div`
    &.content {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    
        background-color: rgba(173, 159, 166, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    &.content h2 {
        color: #fff;
        font-size: 42px;
    }
    
    &.content p{
        color: #fff;
        font-size: 30px;
    }
`
const Home = () => {
    return <Div className="content">
        <h2>Seja Bem-Vindo!</h2>
        <p>Está é a página inicial :)</p>
        <p><Link to="cards">CLIQUE AQUI</Link> para acessar os cards.</p>
    </Div>
}

export default Home
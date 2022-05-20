import React from "react";
import styled from 'styled-components';

const H2 = styled.h2`
    color: #fff;
    background-color: rgb(109, 108, 97);
    padding 20px;
    border-radius: 20px;
    width: fit-content;
    margin: auto;
    text-align: center;
` 

const NotFound = () =>{
    return <div className="content">
        <H2>Nenhum card encontrado </H2>
    </div>
}

export default NotFound
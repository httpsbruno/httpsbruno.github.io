import React from "react";
import styled from 'styled-components';

const Div = styled.div`
    &.loading {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    
        background-color: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &.loading h2 {
        color: #fff;
        font-size: 42px;
    }
` 
const Loading = () =>{
    return <Div className="loading">
        <h2>Carregando...</h2>
    </Div>
}

export default Loading
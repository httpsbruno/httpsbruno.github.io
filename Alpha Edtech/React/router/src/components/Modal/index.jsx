import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Div = styled.div`
    &.modal{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
    
    }

    &.modal-content{
        width: 500px;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 20px;
        font-size: 28px;
    }

    &.modal-header, &.modal-footer {
        padding: 30px;

    }

    &.modal-title {
        margin: 0;
    }

    &.modal-body {
        padding: 10px;
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
    }

    &.buttons{
        display: flex;
        width: 200px;
        justify-content: space-around;
        align-items: flex-end;
    }
`
const Button = styled.button`
    width: 80px;
    height: 30px;
    background-color: #eee
    border-radius: 20px;
`

const Modal = ({show, onClose}) => {
    if (!show){
        return null
    }
    return <Div className="modal">
        <Div className="modal-content">
            <Div className="modal-header">
                Tem certeza que deseja sair?
            </Div>
            <Div className="modal-footer">
                <Div className="buttons">
                    <Button onClick={onClose} className="button"> Voltar </Button>
                    <Link to="/"><Button className="button">Sair</Button></Link>
                </Div>
            </Div>
        </Div>
    </Div>
}

export default Modal
import React, { useState, useEffect } from 'react'
import CardList from './components/CardList';
import styled from 'styled-components';
import Modal from './components/Modal';
const Input = styled.input`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  flex-direction: row;
  width: 20%;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 10px;
  font-size: 30px;
  border-radius: 20px;
  text-align: center;
`
const Button = styled.button`
    width: 100px;
    height: 30px;
    background-color: #eee
    border-radius: 20px;
`

const App =  () => {
  const [charactersURL, setCharactersURL] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [numEp, setNumEp] = useState(1);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    (async () => {
      let allUrl = [];
    
      const reponse = await fetch(`https://rickandmortyapi.com/api/episode/${numEp}`);
      const data = await reponse.json();
      console.log(data.error);
      if(data.error || data.info) {
        setCharactersURL([-1]);
        setCharacters([-1]);
      }else {
        allUrl = allUrl.concat(data.characters);
        setCharactersURL(allUrl);
      }
    })();
  }, [numEp]);
  
  //console.log(charactersURL);
  useEffect(() => {
    (async () => {
      if(charactersURL[0] !== -1){
        let allChars = [];
        for (let i = 0; i <= charactersURL.length - 1; i++) {
          const reponse = await fetch(
          charactersURL[i]
        );
        const data = await reponse.json();
        allChars = allChars.concat(data);
      }
      setCharacters(allChars);
     }
    })();
  }, [charactersURL]);
  //console.log(characters);

  return <div >
     <Button onClick={() => setShowModal(true)} > Página Inicial</Button>
     <Modal onClose={() => setShowModal(false)} show={showModal}></Modal>
     <Input type="number" placeholder='Digite aqui...' onChange={e =>{
        setCharacters([])
        setNumEp(e.target.value)
      } } value={numEp}></Input>
      <CardList characters={characters}></CardList>
  </div>;
};

export default App


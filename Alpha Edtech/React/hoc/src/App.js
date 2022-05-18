import React, { useState, useEffect } from 'react'
import CardList from './components/CardList';
//import request from './Request/request.js'

const App =  () => {
  const [charactersURL, setCharactersURL] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [numEp, setNumEp] = useState(1);

  useEffect(() => {
    (async () => {
 
        let allUrl = [];
    
        const reponse = await fetch(
        `https://rickandmortyapi.com/api/episode/${numEp}`,
        );
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
      
      <div>
      <input type="number" placeholder='Digite aqui...' onChange={e =>{
        setCharacters([])
        setNumEp(e.target.value)
      } } value={numEp}></input>
  
      </div>
      <CardList characters={characters}></CardList>
  </div>;
};

export default App


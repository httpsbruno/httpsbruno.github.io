import React, { useState, useEffect } from 'react'
import Card from './components/Card';

const App =  () => {
  const [charactersURL, setCharactersURL] = useState([]);
  const [characters, setCharacters] = useState([]);
 
  useEffect(() => {
    (async () => {
      let allChars = [];
    
        const reponse = await fetch(
          'https://rickandmortyapi.com/api/episode/28',
        );
        const data = await reponse.json();
        allChars = allChars.concat(data.characters);

      setCharactersURL(allChars);
    })();
  }, []);
  
  //console.log(charactersURL);
  useEffect(() => {
    (async () => {
      let allChars = [];
      for (let i = 0; i <= charactersURL.length - 1; i++) {
        const reponse = await fetch(
          charactersURL[i]
        );
        const data = await reponse.json();
        allChars = allChars.concat(data);
      }
      setCharacters(allChars);
    })();
  }, [charactersURL]);
  //console.log(characters);

  return <div >
    <div className="content">
      {characters.map( function (c){
        return <Card info={c} type={c.status}></Card>
      })}
    </div>
  </div>;
};

export default App


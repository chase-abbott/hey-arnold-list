import React, { useEffect, useState } from 'react';
import List from '../components/app/List';
import { getCharacters } from '../services/herArnoldAPI.js';

export default function ListContainer(){
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    return getCharacters()
      .then(res => setCharacters(res))
      .then(() => setIsLoading(false));
  }, []);

  return (
    <>
      {isLoading 
        ? <h1> Loading ... </h1>
        : <List characters={characters}/> 
      }
    </>
  );
}

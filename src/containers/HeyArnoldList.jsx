import React, { useState, useEffect } from 'react';
import { fetchAllCharacters } from '../services/heyArnoldApi';
import CharacterList from '../components/characters/CharacterList';
import spinner from './heyarnoldspinner.gif';

const HeyArnoldList = () => {

  const [characterList, setCharacterList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllCharacters()
      .then((characters) => setCharacterList(characters))
      .finally(() => setLoading(false));
  }, []);

  if(loading) {
    return (
      <img src={spinner} alt="loading gif" />
    );
  }

  return <CharacterList characters={characterList} />;
};

export default HeyArnoldList;

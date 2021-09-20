import React, { useState, useEffect } from 'react';
import { fetchOneCharacter } from '../services/heyArnoldApi';
import spinner from './heyarnoldspinner.gif';
import { Link, useParams } from 'react-router-dom';
import Character from '../components/characters/Character';

const HeyArnoldDetail = () => {

  const { id } = useParams();
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOneCharacter(id)
      .then((character) => setCharacter(character))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <main>
      <header>
        <Link to="/">
          Homepage
        </Link>
      </header>
      <content>
        {loading ? 
          <img src={spinner} alt="loading gif" /> : 
          <Character {...character} />}
      </content>
    </main>
  );
};

export default HeyArnoldDetail;

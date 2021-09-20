import React, { useState, useEffect } from 'react';
import { fetchOneCharacter } from '../services/heyArnoldApi';
import { Link, useParams } from 'react-router-dom';
import Character from '../components/characters/Character';

// eslint-disable-next-line max-len
const spinner = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/945673bd-feaf-46f2-9e69-82deb505b95a/d9uqsyv-367865ee-f6f7-48ed-ba74-bbfa2a36a52a.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzk0NTY3M2JkLWZlYWYtNDZmMi05ZTY5LTgyZGViNTA1Yjk1YVwvZDl1cXN5di0zNjc4NjVlZS1mNmY3LTQ4ZWQtYmE3NC1iYmZhMmEzNmE1MmEuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.N-qjErA2OUW5Hz32FymO9LfJUBrnvqgY378NpbRSmbo';

const HeyArnoldDetail = () => {

  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(id);

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
      <section>
        {loading ? 
          <img src={spinner} alt="loading gif" /> : 
          <Character image={character.image} name={character.name} />}
      </section>
    </main>
  );
};

export default HeyArnoldDetail;

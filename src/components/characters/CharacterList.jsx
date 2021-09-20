import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Character from './Character';

export default function CharacterList({ characters }) {
  return (
    <ul aria-label="character-list">
      {characters.map((character) => (
        <li key={character.id}>
          <Link key={character.id} to={`${character.id}`}>
            <Character name={character.name} image={character.image} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  )
};

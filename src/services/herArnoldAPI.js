/* eslint-disable max-len */
const getCharacters = () => {
  return fetch('https://hey-arnold-api.herokuapp.com/api/v1/characters?perPage=100')
    .then(res => res.json());
};

const getCharacterById = id => {
  return fetch(`https://hey-arnold-api.herokuapp.com/api/v1/characters/${id}`)
    .then(res => res.json());
};

export { getCharacters, getCharacterById };

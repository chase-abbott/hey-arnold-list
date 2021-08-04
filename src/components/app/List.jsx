import React from 'react';
import ListItem from './ListItem';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Ul = styled.ul`
list-style-type: none;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
`; 

const Li = styled.li`
display: flex;
justify-content: center;
margin: 25px;
`;

export default function List({ characters }){
  return (
    <Ul data-testid="list">
      {characters.map(char => {
        return (
          <Li key={char._id}>
            <ListItem image={char.image} id={char._id}/>
          </Li>
        ); 
      })}
    </Ul>
  ); 
}

List.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired
    })
  )
};

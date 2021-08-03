import React from 'react';
import ListItem from './ListItem';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Ul = styled.ul`
`; 

const Li = styled.li`
`;

export default function List({ characters }){
  return (
    <Ul>
      {characters.map(char => {
        return (
          <Li key={char._id}>
            <ListItem image={char.image}/>
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

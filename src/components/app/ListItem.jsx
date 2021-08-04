import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Image = styled.img`
width: 200px;
height: 300px;
`;

export default function ListItem({ id, image }){
  return (
    <Link to={`/detail/${id}`}>
      <Image src={image} alt="image"/>
    </Link>
  );
}

ListItem.propTypes = {
  id: PropTypes.string,
  image: PropTypes.string.isRequired
};

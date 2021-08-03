import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Image = styled.img`
`;

export default function ListItem({ image }){
  return <Image src={image} alt="image"/>;
}

ListItem.propTypes = {
  image: PropTypes.string.isRequired
};

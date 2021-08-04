import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom'; 
import { getCharacterById } from '../../services/herArnoldAPI.js';

const Container = styled.div``;

const DetailContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

const Image = styled.img``;
const NameTag = styled.h3``;

export default function Detail(){
  const [character, setCharacter] = useState(null);
  const { _id } = useParams();

  useEffect(() => {
    return getCharacterById(_id)
      .then(res => setCharacter(res));
  }, [1]);

  return (
    <Container>
      <Link to="/"> Home </Link>
      {character 
        ? <DetailContainer>
          <Image src={character.image} alt={character.name}/>
          <NameTag> {character.name} </NameTag>
        </DetailContainer>
        : null
      }
    </Container>
  );
}

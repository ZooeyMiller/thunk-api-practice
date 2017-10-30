import React from 'react';
import styled from 'styled-components';

const GifCard = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
`;

const DeleteButton = styled.button`
  background-color: palevioletred;
  color: white;
  border: none;
  border-radius: 5px;
  font-family: ubuntu, helvetica, sans-serif;
  font-size: 1em;
  font-weight: bold;
  padding: 0.25em;
`;

const Gif = styled.img`
  max-height: 14em;
  display: block;
  margin: 0 auto;
`;

const GifContainer = styled.div`width: 100%;`;
export default props => {
  return (
    <GifCard>
      <GifContainer>
        <Gif src={props.image} alt={`gif of ${props.searchTerm}`} />
      </GifContainer>
      <p>title: {props.searchTerm}</p>
      <p>time: {props.time}</p>
      <DeleteButton onClick={() => props.removeSearchItem(props.index)}>
        delete
      </DeleteButton>
    </GifCard>
  );
};

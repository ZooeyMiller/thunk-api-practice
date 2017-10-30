import React from 'react';
import styled from 'styled-components';

const GifCard = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 0.25em;
  border-radius: 5px;
  box-shadow: 7px 7px 5px #888888;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
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
  max-width: 100%;
  display: block;
  margin: 0 auto;
`;

const Info = styled.h4`
  font-family: ubuntu, helvetica, sans-serif;
  font-size: 1em;
  margin: 0.25em;
  text-align: center;
`;

const GifContainer = styled.div`width: 100%;`;
export default props => {
  return (
    <GifCard>
      <GifContainer>
        <Gif src={props.image} alt={`gif of ${props.searchTerm}`} />
      </GifContainer>
      <Info>title: {props.searchTerm}</Info>
      <Info>time: {props.time}</Info>
      <DeleteButton onClick={() => props.removeSearchItem(props.index)}>
        delete
      </DeleteButton>
    </GifCard>
  );
};

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
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 0.5em;
  }
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
  @media (min-width: 767px) {
    font-size: 1.5em;
  }
`;

const Gif = styled.img`
  max-height: 14em;
  max-width: 100%;
  display: block;
  margin: 0 auto;
  @media (min-width: 768px) {
    max-height: 20em;
  }
`;

const Info = styled.h4`
  font-family: ubuntu, helvetica, sans-serif;
  font-size: 1em;
  margin: 0.25em;
  text-align: center;
  @media (min-width: 767px) {
    text-align: left;
    font-size: 1.5em;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media (min-width: 767px) {
    padding: 1em;
    min-width: 40%;
  }
`;
const GifContainer = styled.div`
  width: 100%;
  @media (min-width: 767px) {
    max-width: 50%;
  }
`;
export default props => {
  return (
    <GifCard>
      <GifContainer>
        <Gif src={props.image} alt={`gif of ${props.searchTerm}`} />
      </GifContainer>
      <InfoContainer>
        <Info>title: {props.searchTerm}</Info>
        <Info>time: {props.time}</Info>
        <DeleteButton onClick={() => props.removeSearchItem(props.index)}>
          delete
        </DeleteButton>
      </InfoContainer>
    </GifCard>
  );
};

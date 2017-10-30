import React from 'react';
import {
  GifCard,
  GifContainer,
  Gif,
  Info,
  InfoContainer,
  DeleteButton,
} from './styled-components/SearchItem';

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

import React from 'react';
import styled from 'styled-components';

const GifCard = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
`;
export default props => {
  return (
    <GifCard>
      <img src={props.image} alt="" />
      <p>title: {props.searchTerm}</p>
      <p>time: {props.time}</p>
      <button onClick={() => props.removeSearchItem(props.index)}>
        delete
      </button>
    </GifCard>
  );
};

import React from 'react';
import SearchItem from './SearchItem';
import { connect } from 'react-redux';
import { removeSearchItem } from '../actionCreators';
import styled from 'styled-components';

const GifCardContainer = styled.ul`
  display: flex;
  flex-direction: column-reverse;
  padding: 0;
`;

export const SearchesContainer = props => {
  return (
    <GifCardContainer>
      {props.searches.map((search, index) => (
        <SearchItem
          time={search.time}
          image={search.image}
          searchTerm={search.searchTerm}
          key={index}
          index={index}
          removeSearchItem={props.removeSearchItem}
        />
      ))}
    </GifCardContainer>
  );
};

const mapStateToProps = state => ({
  searches: state.searches,
});

const mapDispatchToProps = dispatch => ({
  removeSearchItem: id => dispatch(removeSearchItem(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchesContainer);

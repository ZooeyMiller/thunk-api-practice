import React from 'react';
import SearchItem from './SearchItem';
import { connect } from 'react-redux';
import { removeSearchItem } from '../actionCreators';
import { GifCardContainer } from './styled-components/SearchesContainer';

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

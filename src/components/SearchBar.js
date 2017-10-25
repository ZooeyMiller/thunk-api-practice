import React from 'react';
import { connect } from 'react-redux';
import {
  updateSearch,
  addSearchItem,
  handleApiError,
  handleSearchError,
} from '../actionCreators';

const SearchBar = props => {
  return (
    <form
      onSubmit={e => {
        e.preventDefault();

        props.searchTerm
          ? props.onSearchSubmit(props.searchTerm)
          : props.handleSearchError();
      }}
    >
      <input
        type="text"
        value={props.searchTerm}
        onChange={e => {
          props.onSearchInput(e.target.value);
        }}
      />
      <button>search</button>
    </form>
  );
};
const getGif = searchTerm => {
  return dispatch => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${encodeURIComponent(
        searchTerm
      )}&api_key=dc6zaTOxFJmzC`
    )
      .then(res => res.json())
      .then(json =>
        dispatch(addSearchItem(searchTerm, json.data[0].images.original.url))
      )
      .catch(error => {
        dispatch(handleApiError());
      });
  };
};
const mapStateToProps = state => ({
  searchTerm: state.searchTerm,
});
const mapDispatchToProps = dispatch => ({
  onSearchInput: text => dispatch(updateSearch(text)),
  onSearchSubmit: text => dispatch(getGif(text)),
  handleSearchError: () => dispatch(handleSearchError()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);

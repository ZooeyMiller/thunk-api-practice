import React from 'react';
import { connect } from 'react-redux';
import {
  updateSearch,
  addSearchItem,
  handleApiError,
  handleSearchError,
} from '../actionCreators';
import styled from 'styled-components';

const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0.5em 0.5em 0 0.5em;
`;
const SearchInput = styled.input`
  border-radius: 5px;
  margin-bottom: 0.5em;
  border-style: solid;
  font-size: 1.5em;
  font-family: ubuntu, helvetica, sans-serif;
  padding: 0.25em;
`;

const SearchButton = styled.button`
  background-color: palevioletred;
  color: white;
  border: none;
  border-radius: 5px;
  font-family: ubuntu, helvetica, sans-serif;
  font-size: 1.5em;
  font-weight: bold;
  padding: 0.15em 0.25em 0.25em 0.25em;
`;

const SearchBar = props => {
  return (
    <SearchForm
      onSubmit={e => {
        e.preventDefault();

        props.searchTerm
          ? props.onSearchSubmit(props.searchTerm)
          : props.handleSearchError();
      }}
    >
      <SearchInput
        placeholder="search for a gif..."
        type="text"
        value={props.searchTerm}
        onChange={e => {
          props.onSearchInput(e.target.value);
        }}
      />
      <SearchButton>go</SearchButton>
    </SearchForm>
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

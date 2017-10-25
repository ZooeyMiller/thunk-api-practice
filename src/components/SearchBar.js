import React from 'react';
import { connect } from 'react-redux';
import { updateSearch, addSearchItem } from '../actionCreators';

const SearchBar = props => {
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        props.onSearchSubmit(props.searchTerm);
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
const mapStateToProps = state => ({
  searchTerm: state.searchTerm,
});
const mapDispatchToProps = dispatch => ({
  onSearchInput: text => dispatch(updateSearch(text)),
  onSearchSubmit: text => dispatch(addSearchItem(text)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);

import React from 'react';
import { connect } from 'react-redux';
import { updateSearch } from '../actionCreators';

const SearchBar = props => {
  console.log(props);
  return (
    <form>
      <input
        type="text"
        value={props.searchTerm}
        onChange={e => {
          e.preventDefault;
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
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);

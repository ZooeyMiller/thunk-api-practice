import React from 'react';
import SearchItem from './SearchItem';
import { connect } from 'react-redux';

export const SearchesContainer = props => {
  return <ul>{props.searches.map(search => <SearchItem {...search} />)}</ul>;
};

const mapStateToProps = state => ({
  searches: state.searches,
});

export default connect(mapStateToProps)(SearchesContainer);

import React from 'react';
import SearchBar from './SearchBar';
import SearchesContainer from './SearchesContainer';
import Error from './Error';

import { connect } from 'react-redux';

const App = props => {
  return (
    <div>
      <SearchBar />
      <SearchesContainer />
      {props.error ? <Error error={props.error} /> : ''}
    </div>
  );
};
const mapStateToProps = state => ({
  error: state.error,
});

export default connect(mapStateToProps)(App);

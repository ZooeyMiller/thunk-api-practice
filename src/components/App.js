import React from 'react';
import SearchBar from './SearchBar';
import SearchesContainer from './SearchesContainer';
import Error from './Error';

import { connect } from 'react-redux';
import { Header, Container } from './styled-components/App';

const App = props => {
  return (
    <div>
      <Header>gif search</Header>
      <Container>
        <SearchBar />
        {props.error ? <Error error={props.error} /> : ''}
        <SearchesContainer />
      </Container>
    </div>
  );
};
const mapStateToProps = state => ({
  error: state.error,
});

export default connect(mapStateToProps)(App);

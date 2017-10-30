import React from 'react';
import SearchBar from './SearchBar';
import SearchesContainer from './SearchesContainer';
import Error from './Error';

import { connect } from 'react-redux';
import styled from 'styled-components';

const Header = styled.div`
  background-color: palevioletred;
  font-family: ubuntu, helvetica, sans-serif;
  min-height: 2em;
  font-size: 2em;
  font-weight: bold;
  width: 100%;
  color: white;
  padding: 0.5em;
  box-sizing: border-box;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 767px) {
    width: 767px;
    margin: 0 auto;
  }
`;

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

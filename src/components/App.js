import React, { Component } from 'react';
import SearchBar from './SearchBar';
import SearchesContainer from './SearchesContainer';

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <SearchesContainer />
      </div>
    );
  }
}

export default App;

import React from 'react';
import Header from '../components/Header';

class Search extends React.Component {
  render() {
    return (
      <div data-testid="page-search">
        <h2>
          Search
        </h2>
        <h3>
          <Header />
        </h3>
      </div>
    );
  }
}

export default Search;

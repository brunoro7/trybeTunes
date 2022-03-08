import React from 'react';
import Header from '../components/Header';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      inputSearchValue: '',
      buttonSearchDisable: true,
    };
  }

  handleButtonSearch = ({ target: { value } }) => {
    const valorSearch = value;
    const numberToCompare = 2;
    this.setState({
      inputSearchValue: valorSearch,
    });
    if (valorSearch.length >= numberToCompare) {
      this.setState({
        buttonSearchDisable: false,
      });
    } else {
      this.setState({
        buttonSearchDisable: true,
      });
    }
    console.log(value);
  }

  render() {
    const { inputSearchValue, buttonSearchDisable } = this.state;
    return (
      <div data-testid="page-search">
        <h2>
          Search
        </h2>
        <h3>
          <Header />
        </h3>
        <form>
          <input
            type="text"
            data-testid="search-artist-input"
            value={ inputSearchValue }
            onChange={ this.handleButtonSearch }
          />
          {' '}
          <button
            type="button"
            data-testid="search-artist-button"
            disabled={ buttonSearchDisable }
          >
            Pesquisar
          </button>
        </form>
      </div>
    );
  }
}

export default Search;

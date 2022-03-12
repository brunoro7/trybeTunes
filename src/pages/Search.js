import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import searchAlbumsAPIs from '../services/searchAlbumsAPI';
import LoadMsg from './LoadMsg';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      loadingValue: false,
      comparResultSearch: false,
      inputSearchValue: '',
      searchValue: '',
      buttonSearchDisable: true,
      resultSearchValue: [],
    };
  }

  validationButtonSearch = ({ target: { value } }) => {
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
  }

  handleButtonSearch = async () => {
    const { inputSearchValue } = this.state;
    const getAPIdata = await searchAlbumsAPIs(inputSearchValue);
    this.setState({
      loadingValue: true,
      resultSearchValue: [...getAPIdata],
      searchValue: inputSearchValue,
    }, () => {
      this.setState({
        inputSearchValue: '',
      });
    });
    this.setState({
      loadingValue: false,
      comparResultSearch: true,
    });
    // console.log(...getAPIdata);
  }

  render() {
    const {
      loadingValue,
      inputSearchValue,
      buttonSearchDisable,
      resultSearchValue,
      comparResultSearch,
      searchValue,
    } = this.state;

    const resultSearchMsg = (
      <section>
        <h4>
          { `Resultado de álbuns de: ${searchValue}` }
        </h4>
        <ul>
          {
            (resultSearchValue.length <= 0)
              ? (
                <h3>
                  Nenhum álbum foi encontrado
                </h3>)
              : resultSearchValue.map((eachSearcValue) => (
                <li key={ eachSearcValue.collectionId }>
                  <img src={ eachSearcValue.artworkUrl100 } alt="Imagem do Produto" />
                  <h3>
                    <Link
                      to={ `/album/${eachSearcValue.collectionId}` }
                      data-testid={ `link-to-album-${eachSearcValue.collectionId}` }
                    >
                      { eachSearcValue.artistName }
                    </Link>
                  </h3>
                  <h4>{ eachSearcValue.collectionName }</h4>
                </li>
              ))
          }
        </ul>
      </section>);
    const formInputSearch = (
      <form>
        <label htmlFor="inputSearch">
          <input
            type="text"
            data-testid="search-artist-input"
            value={ inputSearchValue }
            onChange={ this.validationButtonSearch }
            name="inputSearch"
          />
          {' '}
          <button
            type="button"
            data-testid="search-artist-button"
            disabled={ buttonSearchDisable }
            onClick={ this.handleButtonSearch }
            name="inputSearch"
          >
            Pesquisar
          </button>
        </label>
      </form>);
    const changeLoadToResult = (comparResultSearch) ? resultSearchMsg : '';

    return (
      <div data-testid="page-search">
        <h2>
          Search
        </h2>
        <h3>
          <Header />
        </h3>
        <section>
          { (formInputSearch) }
          <div>
            { (loadingValue) ? <LoadMsg /> : (changeLoadToResult) }
          </div>
        </section>
      </div>
    );
  }
}

export default Search;

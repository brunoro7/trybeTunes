import React from 'react';
import PropTypes from 'prop-types';
import { addSong, removeSong } from '../services/favoriteSongsAPI';
import LoadMsg from '../pages/LoadMsg';

class MusicCard extends React.Component {
  constructor() {
    super();
    this.state = {
      inputCheck: false,
      loadingValue: false,
    };
  }

  componentDidMount() {
    const { isFavSong } = this.props;
    if (isFavSong) {
      this.setState({
        inputCheck: isFavSong,
      });
    }
    // console.log(isFavSong);
  }

  handleAddFavoriteSong = async () => {
    this.setState({
      loadingValue: true,
    });
    const { inputCheck } = this.state;

    const { preview, name, trackId } = this.props;
    const favoriteSongObj = {
      preview,
      name,
      trackId,
    };

    if (inputCheck === false) {
      await addSong(favoriteSongObj);
    } else {
      await removeSong(favoriteSongObj);
    }
    this.setState({
      inputCheck: !inputCheck,
      loadingValue: false,
    });
    // console.log(eventValue);
    // console.log(getAddSong);
  }

  render() {
    const { preview, name, trackId } = this.props;
    const { inputCheck, loadingValue } = this.state;

    // console.log(inputCheck);
    return (
      <div>
        <h4>
          {name}
        </h4>
        <section>
          <audio data-testid="audio-component" src={ preview } controls>
            <track kind="captions" />
            O seu navegador não suporta o elemento
            <code>audio</code>
            .
          </audio>
          <label htmlFor="favoriteSong">
            Favorita
            {' '}
            <input
              id={ trackId }
              type="checkbox"
              name="favoriteSong"
              data-testid={ `checkbox-music-${trackId}` }
              onChange={ this.handleAddFavoriteSong }
              checked={ inputCheck }
            />
            <span>
              { (loadingValue) ? <LoadMsg /> : '' }
            </span>
          </label>
        </section>
      </div>
    );
  }
}

MusicCard.propTypes = {
  preview: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  trackId: PropTypes.number.isRequired,
  isFavSong: PropTypes.func.isRequired,
};

export default MusicCard;

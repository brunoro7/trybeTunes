import React from 'react';
import PropTypes from 'prop-types';
import { addSong } from '../services/favoriteSongsAPI';
import LoadMsg from '../pages/LoadMsg';

class MusicCard extends React.Component {
  constructor() {
    super();
    this.state = {
      inputCheck: false,
      loadingValue: false,
    };
  }

  handleAddFavoriteSong = async (event) => {
    this.setState({
      loadingValue: true,
    });
    const { preview, name, trackId } = this.props;
    const favoriteSongObj = {
      preview,
      name,
      trackId,
    };
    const getAddSong = await addSong(favoriteSongObj);
    const eventValue = event.target.checked;
    this.setState({
      inputCheck: eventValue,
      loadingValue: false,
    });
    // console.log(eventValue);
    console.log(getAddSong);
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
              type="checkbox"
              data-testid={ `checkbox-music-${trackId}` }
              name="favoriteSong"
              id={ trackId }
              onChange={ this.handleAddFavoriteSong }
              value={ inputCheck }
            />
            <div>
              { (loadingValue) ? <LoadMsg /> : '' }
            </div>
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
};

export default MusicCard;

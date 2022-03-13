import React from 'react';
import PropTypes from 'prop-types';

class MusicCard extends React.Component {
  render() {
    const { preview, name } = this.props;
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
        </section>
      </div>
    );
  }
}

MusicCard.propTypes = {
  preview: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default MusicCard;

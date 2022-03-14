import React from 'react';
import PropTypes from 'prop-types';
import getMusics from '../services/musicsAPI';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import LoadMsg from './LoadMsg';

class Album extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      album: '',
      musicList: [],
      isFavSong: '',
      loadingValue: false,
    };
  }

  async componentDidMount() {
    this.setState({
      loadingValue: true,
    });
    // console.log(this.props);
    const { match: { params: { id } } } = this.props;
    const getMusicList = await getMusics(id);
    this.setState({
      musicList: getMusicList.slice(1),
    });

    const firstItem = getMusicList[0];
    this.setState({
      name: firstItem.artistName,
      album: firstItem.collectionName,
    });

    const callGetFavoriteSongs = await getFavoriteSongs();
    this.setState({
      isFavSong: callGetFavoriteSongs,
      loadingValue: false,
    });
  }

  render() {
    const { name, album, musicList,
      isFavSong, loadingValue } = this.state;

    // console.log(musicList);
    return (
      <div data-testid="page-album">
        <h2>
          Album
        </h2>
        <h3>
          <Header />
        </h3>
        { (loadingValue) ? <LoadMsg />
          : (
            <section>
              <h3 data-testid="artist-name">{name}</h3>
              <h4 data-testid="album-name">{album}</h4>

              <section>
                { musicList.map((music) => (
                  <MusicCard
                    key={ music.trackId }
                    name={ music.trackName }
                    preview={ music.previewUrl }
                    trackId={ music.trackId }
                    isFavSong={ isFavSong.some((favSong) => favSong.trackId
                      === music.trackId) }
                  />
                ))}
              </section>
            </section>
          )}
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default Album;

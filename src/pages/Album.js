import React from 'react';
import Header from '../components/Header';

class Album extends React.Component {
  render() {
    return (
      <div data-testid="page-album">
        <h2>
          Album
        </h2>
        <h3>
          <Header />
        </h3>
      </div>
    );
  }
}

export default Album;

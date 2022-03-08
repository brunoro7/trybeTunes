import React from 'react';
import Header from '../components/Header';

class Profile extends React.Component {
  render() {
    return (
      <div data-testid="page-profile">
        <h2>
          Profile
        </h2>
        <h3>
          <Header />
        </h3>
      </div>
    );
  }
}

export default Profile;

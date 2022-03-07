import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import Favorites from './pages/Favoirites';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import NotFound from './pages/NotFound';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <h1>TrybeTunes</h1>

        <Login />
        <Search />
        <Album />
        <Favorites />
        <Profile />
        <ProfileEdit />
        <NotFound />

      </BrowserRouter>
    );
  }
}

export default App;

// depois de BrowserRouter poderia ter um  'as Router' p/ renomear;

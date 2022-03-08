import React from 'react';
import { Link } from 'react-router-dom';
import LoadMsg from '../pages/LoadMsg';
import { getUser } from '../services/userAPI';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      loadingValue: true,
      userNameValue: '',
    };
  }

  async componentDidMount() {
    const takeUserName = await getUser();
    this.setState({
      loadingValue: false,
      userNameValue: takeUserName.name,
    });
  }

  render() {
    const { loadingValue, userNameValue } = this.state;
    return (
      <header data-testid="header-component">
        { (loadingValue) ? <LoadMsg /> : (
          <div data-testid="header-user-name">
            <h3>{ userNameValue }</h3>
          </div>
        )}
        <Link
          to="/search"
          data-testid="link-to-search"
        >
          Search
        </Link>
        {' '}
        <Link
          to="/favorites"
          data-testid="link-to-favorites"
        >
          Favorites
        </Link>
        {' '}
        <Link
          to="/profile"
          data-testid="link-to-profile"
        >
          Profile
        </Link>
      </header>
    );
  }
}

export default Header;

// handleGetUser = async () => {
//   console.log('entrou na função');
//   this.setState({ [loadingValue]: true });
//   await getUser();
//   this.setState({ [loadingValue]: false });
// }

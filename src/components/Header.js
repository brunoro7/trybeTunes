import React from 'react';
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
            <p>{ userNameValue }</p>
          </div>
        )}
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

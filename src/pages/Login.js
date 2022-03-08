import React from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import LoadMsg from './LoadMsg';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      inputLoginName: '',
      buttonLoginDisable: true,
      loadingValue: false,
      urlToSearch: '',
    };
  }

  handleInputLoginName = ({ target: { value } }) => {
    const valorName = value;
    const numberToCompare = 3;
    this.setState({
      inputLoginName: valorName,
    });
    if (valorName.length >= numberToCompare) {
      this.setState({
        buttonLoginDisable: false,
      });
    } else {
      this.setState({
        buttonLoginDisable: true,
      });
    }
  }

  handleCreateUser = async () => {
    const { inputLoginName } = this.state;
    this.setState({ loadingValue: true });
    await createUser({ name: inputLoginName });
    this.setState({ urlToSearch: '/search' });
  }

  render() {
    const {
      inputLoginName,
      buttonLoginDisable,
      loadingValue,
      urlToSearch,
    } = this.state;

    return (
      <div data-testid="page-login">
        { (loadingValue) ? <LoadMsg /> : (
          <section>
            <label htmlFor="inputName">
              Login:
              {' '}
              <input
                type="text"
                data-testid="login-name-input"
                name="inputName"
                id="inputName"
                value={ inputLoginName }
                onChange={ this.handleInputLoginName }
              />
            </label>
            {' '}
            <button
              type="submit"
              data-testid="login-submit-button"
              id=""
              disabled={ buttonLoginDisable }
              onClick={ this.handleCreateUser }
            >
              Entrar
            </button>
          </section>
        )}
        <Redirect exact to={ urlToSearch } />
      </div>
    );
  }
}

export default Login;

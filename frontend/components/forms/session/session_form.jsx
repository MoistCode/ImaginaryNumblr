import React from 'react';

class SessionForm {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(user);
  }

  render() {
    return (
      <div>
        <h1>Login Page</h1>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>Username:
            <input
              type='text'
              value={this.state.username}
              onChange={this.update('username')} />
          </label>
          <label>Password:
            <input
              type='password'
              value={this.state.password}
              onChange={this.update('password')} />
          </label>
          <button>Log In!</button>
        </form>
      </div>
    )
  }

}

export default SessionForm;

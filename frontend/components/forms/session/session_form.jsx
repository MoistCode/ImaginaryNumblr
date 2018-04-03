import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this._stateSetter(this.props.formType);
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
    this.props.processForm(user);
  }

  render() {
    const { formType } = this.props;

    return (
      <div>
        <h1>{ formType } Page</h1>
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
          {this._additionalFields(formType)}
          <button>{this.props.formType}!</button>
        </form>
      </div>
    )
  }

  _additionalFields(formType) {
    if (formType === 'Sign Up') {
      return (
        <div>
          <label>Email:
            <input
              type='text'
              value={this.state.email}
              onChange={this.update('email')} />
          </label>
          <label>Profile Picture Url:
            <input
              type='text'
              value={this.state.profile_picture_url}
              onChange={this.update('profile_picture_url')} />
          </label>
        </div>
      )
    }
  }

  _stateSetter(formType) {
    if (formType === 'Log In') {
      return {
        username: '',
        password: ''
      };
    } else {
      return {
        username: '',
        password: '',
        email: '',
        profile_picture_url: ''
      };
    }
  }

}

export default SessionForm;

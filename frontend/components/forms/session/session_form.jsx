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

  errorMessages() {
  if (this.props.errors.length !== 0) {
    return (
      <ul>
        {
          this.props.errors.map((err) => <li>{err}</li>)
        }
      </ul>
    )
  }
}

  render() {
    const { formType } = this.props;

    return (
      <div className='main-session-form'>
        {this.errorMessages()}
        <h1 className='session-form-header'>{ formType }!</h1>
        <form onSubmit={(e) => this.handleSubmit(e)} className='session-form'>
          <label>Username:
            <input
              type='text'
              value={this.state.username}
              onChange={this.update('username')} />
          </label><br />
          <label>Password:
            <input
              type='password'
              value={this.state.password}
              onChange={this.update('password')} />
          </label><br />
          {this._additionalFields(formType)}
          <button>{this.props.formType}!</button>
        </form>
      </div>
    )
  }

  _additionalFields(formType) {
    if (formType === 'Sign Up') {
      return (
        <div className='session-form-add-input'>
          <label>Email:
            <input
              type='text'
              value={this.state.email}
              onChange={this.update('email')} />
          </label><br />
          <label>Profile Picture Url:
            <input
              type='text'
              value={this.state.profile_picture_url}
              onChange={this.update('profile_picture_url')} />
          </label><br />
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

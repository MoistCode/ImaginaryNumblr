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
      <div className='background-session'>
        <div className='main-session-form'>
          <h1 className='session-form-header'>{ formType }!</h1>
          <form onSubmit={(e) => this.handleSubmit(e)} className='session-form'>
            <div className='session-input-around'>
              <input
                type='text'
                value={this.state.username}
                onChange={this.update('username')} />
            </div>
            <br />
            <div className='session-input-around'>
              <input
                type='password'
                value={this.state.password}
                onChange={this.update('password')} />
            </div>
            <br />
            {this._additionalFields(formType)}
            <button>{this.props.formType}!</button>
          </form>
          {this.errorMessages()}
        </div>
      </div>
    )
  }

  _additionalFields(formType) {
    if (formType === 'Sign Up') {
      return (
        <div className='session-form-add-input'>
          <div className='session-input-around'>
            <input
              type='text'
              value={this.state.email}
              onChange={this.update('email')} />
            <br />
          </div>
          <div className='session-input-around'>
            <input
              type='text'
              value={this.state.profile_picture_url}
              onChange={this.update('profile_picture_url')} />
            <br />
          </div>
        </div>
      )
    }
  }

  _stateSetter(formType) {
    if (formType === 'Log In') {
      return {
        username: 'Username',
        password: 'Password'
      };
    } else {
      return {
        username: 'Username',
        password: 'Password',
        email: 'Email',
        profile_picture_url: 'Profile Picture Url'
      };
    }
  }

}

export default SessionForm;

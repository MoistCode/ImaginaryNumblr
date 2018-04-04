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
    this.props.clearErrors();
    this.props.processForm(user);
  }

  errorMessages() {
  if (this.props.errors.length !== 0) {
    return (
      <ul className='session-errors'>
        {
          this.props.errors.map((err) => <li>{err}{'\u00A0'}</li>)
        }
      <br />
      </ul>
    )
  }
}

  render() {
    const { formType } = this.props;

    return (
      <div className='background-session'>
        <div className='w3-container w3-center w3-animate-opacity'>
          <div className='main-session-form'>
            <h1 className='session-form-header'>{ formType }!</h1>
            <form onSubmit={(e) => this.handleSubmit(e)} className='session-form'>
              <div className='session-input-around-username'>
                <i className="material-icons">person</i>
                <input
                  className='username-session-input'
                  type='text'
                  value={this.state.username}
                  placeholder="Username"
                  onChange={this.update('username')} />
              </div>
              <br />
              <div className='session-input-around'>
                <i className="fa fa-lock"></i>
                <input
                  type='password'
                  placeholder="Password"
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
      </div>
    )
  }

  _additionalFields(formType) {
    if (formType === 'Sign Up') {
      return (
        <div className='session-form-add-input'>
          <div className='session-input-around-email'>
            <i className="material-icons">email</i>
            <input
              className='email-session-input'
              type='text'
              placeholder="Email"
              value={this.state.email}
              onChange={this.update('email')} />
            <br />
          </div>
          <div className='session-input-around'>
            <i className="fa fa-picture-o"></i>
            <input
              type='text'
              value={this.state.profile_picture_url}
              placeholder="Profile Picture"
              onChange={this.update('profile_picture_url')} />
          </div>
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

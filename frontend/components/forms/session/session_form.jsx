import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this._stateSetter(this.props.formType);
    this.handleSubmit = this.handleSubmit.bind(this);
    this._handleImageChange = this._handleImageChange.bind(this);
  }

  componentWillMount() {
    if($('html').hasClass('fp-enabled')){
      $.fn.fullpage.destroy('all');
    }
    $('#front_page').fullpage();
  }

  componentDidMount() {
    if($('html').hasClass('fp-enabled')){
      $.fn.fullpage.destroy('all');
    }
    $('#front_page').fullpage();
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('user[username]', this.state.username)
    formData.append('user[password]', this.state.password)
    if (this.props.formType === "Sign Up"){
      formData.append('user[profile_picture_url]', this.state.profile_picture_file);
      formData.append('user[email]', this.state.email);
    }
    for (var pair of formData.entries()) {
      console.log(pair[0]+ ', ' + pair[1]);
    }
    this.props.clearErrors();
    this.props.processForm(formData).then(() => window.location.reload());
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

_handleImageChange(e) {
  e.preventDefault();
  const reader = new FileReader();
  const file = e.currentTarget.files[0];

  reader.onloadend = () => {
    this.setState({ profile_picture_file: file, profile_picture_url: reader.result });
  }

  if (file) {
    reader.readAsDataURL(file)
  } else {
    this.setState({ profile_picture_file: null, profile_picture_url: '' })
  }

}

  render() {
    const { formType } = this.props;
    return (
      <div className='section'>
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
                <button>{this.props.formType}!
                  <i className="fa fa-superscript" style={{fontSize:'24px'}} />
                </button>
              </form>
              {this.errorMessages()}
            </div>
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
          <span className='upload-profile-picture'>
            <i className="fa fa-picture-o"></i>
            <input
              type='file'
              onChange={this._handleImageChange} />
            <img src={this.state.profile_picture_url} />
          </span>
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
        profile_picture_file: null,
        profile_picture_url: ''
      };
    }
  }

}

export default SessionForm;

import React from 'react';

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBar: ''
    }
    this._generateNavButtonStyles = this._generateNavButtonStyles.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    }
  }

  render() {
    return (
      <div
        className='main-nav-bar'
        style={{ borderBottom : '1px solid grey', backgroundColor: '#39485D' }}>
        <div className='nav-header-left'>
          {this._mainIcon()}
          <div className='around-search-bar'>
            <i className="fa fa-search"></i>
            <input
              className='nav-search-bar'
              type='text'
              value={this.state.searchBar}
              placeholder='Search ImaginaryNumblr'
              onChange={this.update('searchBar')} />
          </div>
        </div>
        {this._gitAndLinkedIcons()}
        <div className='nav-header-right'>
          {this._createSessionButtons(this.props.currentUser)}
          {this._showCurrentUser()}
        </div>
      </div>
    )
  }

  _showCurrentUser() {
    if (this.props.currentUser) {
      return (
        <span className="user-welcome">
          <img
            onClick={() => {
                if (
                  !this.props.currentUser &&
                  this.props.location.pathname != '/dashboard'
                ) {

                  this.props.history.push('/');
                } else {
                  this.props.history.push(`/users/${this.props.currentUser[0].id}`)
                }
            }}
            className='profile-picture'
            src={this.props.currentUser[0].profileImageUrl} />
        </span>
      )
    }
  }

  _gitAndLinkedIcons() {
    return (
      <div>

        <a href="https://github.com/MoistCode/ImaginaryNumblr">
          <i class="fa fa-github" 
             style={{ fontSize: '36px', marginRight: '10px', color: '#A7CAE9' }}>
          </i>
        </a>

        <a href="https://www.linkedin.com/in/tommy-long-pham-4b7737158/">
          <i class="fa fa-linkedin-square" 
             style={{ fontSize: '36px', color: '#A7CAE9' }}>
          </i>
        </a>

      </div>
    )
  }
  _createSessionButtons(currentUser) {
    const buttonColor = () => {
      if (this.props.location.pathname == '/404meansthispagedoesnotexist') {
        return {color: 'grey', border: '1px solid grey'};
      }
    }
    const loginButton = (
      <button
        className='nav-button'
        onClick={() => {
          this.props.clearErrors();
          this.props.history.push('/login')
        }}
        style={buttonColor()} >Log In<i
                  className="fa fa-superscript"
                  style={{fontSize:'24px'}} />
      </button>
    );


    const logoutButton = (
      <button
        className='nav-button'
        onClick={() => {
          this.props.logout();
          this.props.history.push('/');
        }}
        style={buttonColor()} >Log Out
        <i
          className="fa fa-superscript"
          style={{fontSize:'24px'}} />
      </button>
    );

    const signupButton = (
      <button
        className='nav-button'
        onClick={() => {
          this.props.clearErrors();
          this.props.history.push('/signup');
        }}
        style={buttonColor()} >Sign Up
        <i
          className="fa fa-superscript"
          style={{fontSize:'24px'}} />
      </button>
    )

    const formData = new FormData();
    formData.append('user[username]', 'username')
    formData.append('user[password]', 'password')

    const demoButton = (
      <button
        className='nav-button'
        onClick={() => this.props.demoLogin(formData)}
        >Demo
        <i
          className="fa fa-superscript"
          style={{fontSize:'24px'}} />
      </button>
    )

    if (this.props.location.pathname == '/' && !currentUser) {
      return (
        <span className='session-button'>
          { demoButton }
          { signupButton }
          { loginButton }
        </span>
      )
    }

    const renderedButton = () => {
      if (this.props.location.pathname == '/signup') {
        return loginButton;
      } else if (this.props.location.pathname == '/login') {
        return signupButton;
      } else {

      }
    }


    if (currentUser) {
      return (
        <span className='session-button'>
          <i
            className="fa fa-home"
            style={this._generateNavButtonStyles('home')}
            onClick={() => {
                if (
                  !this.props.currentUser &&
                  this.props.location.pathname != '/dashboard'
                ) {
                  this.props.history.push('/');
                } else {
                  this.props.history.push('/dashboard');
                }
              }}></i>
          <i
            className="fa fa-heart"
            style={this._generateNavButtonStyles('likes')}
            onClick={() => this.props.history.push('/likes')}></i>
          {/* <i className="fa fa-commenting" style={this._generateNavButtonStyles('comment')}></i>
          <i className="fa fa-envelope" style={this._generateNavButtonStyles('envelope')}></i> */}
          <i className="fa fa-user" style={this._generateNavButtonStyles('user')}
                                    onClick={ () =>this.props.history.push(`/users/${this.props.currentUser[0].id}`) }>
          </i>
          {/* <i className="fa fa-cogs" style={this._generateNavButtonStyles('cogs')}></i> */}
          { logoutButton }
        </span>
      )
    } else {
      return (
        <span className='session-button'>
          { renderedButton() }
        </span>
      )
    }
  }

  _generateNavButtonStyles(iconType) {
    if (iconType == 'home' && this.props.location.pathname == '/dashboard') {
      return { fontSize: '36px', color: '#A7CAE9' };
    } else if (iconType == 'likes' && this.props.location.pathname == '/likes') {
      return { fontSize: '36px', color: '#A7CAE9' };
    } else {
      return { fontSize: '36px' };
    }
  }

  _mainIcon() {
    return (
        <img
          onClick={() => {
              if (
                !this.props.currentUser &&
                this.props.location.pathname != '/dashboard'
              ) {
                this.props.history.push('/');
              } else {
                this.props.history.push('/dashboard');
              }
            }
          }
          className='main-nav-icon'
          src="data:image/png;base64,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" />
    )
  }

}

export default NavigationBar;

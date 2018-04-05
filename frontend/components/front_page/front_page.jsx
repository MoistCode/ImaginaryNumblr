import React from 'react';
import { Route } from 'react-router-dom';
import LoginFormContainer from '../forms/session/login_form_container';
import SignupFormContainer from '../forms/session/signup_form_container';

class FrontPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if($('html').hasClass('fp-enabled')){
      $.fn.fullpage.destroy('all');
    }
    $('#front_page').fullpage();
    console.log('didmount')
  }

  componentWillReceiveProps(nextProps) {
    if($('html').hasClass('fp-enabled')){
      $.fn.fullpage.destroy('all');
    }
    $('#front_page').fullpage();
  }

  render() {
    console.log('front page');
    const curPath = this.props.history.location.pathname;
    return (
      <div id="front_page">
        {this._firstSection(curPath)}
        <div className='section'><img className='photo2'></img></div>
        <div className='section'><img className='photo3'></img></div>
        <div className='section'><img className='photo4'></img></div>
        <div className='section'><img className='photo5'></img></div>
        <div className='section'><img className='photo6'></img></div>
      </div>
    )
  }

  _firstSection(currentPath) {

    if (currentPath == '/signup') {
      return (
          <SignupFormContainer />
      )
    } else if (currentPath == '/login') {
      return (
          <LoginFormContainer />
      )
    } else {
      return (
        <div className='section'>
          <img className='photo1' />
        </div>
      )
    }
  }

}

export default FrontPage;

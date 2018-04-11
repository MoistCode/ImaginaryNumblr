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
  }

  componentWillReceiveProps(nextProps) {
    if($('html').hasClass('fp-enabled')){
      $.fn.fullpage.destroy('all');
    }
    $('#front_page').fullpage();
  }

  render() {
    const curPath = this.props.history.location.pathname;
    return (
      <div id="front_page">
        {this._firstSection(curPath)}
        <div className='section' ><img className='photo2'></img></div>
        <div className='section'><img className='photo3'></img></div>
        <div className='section' ><img className='photo4'></img></div>
        <div className='section'><img className='photo5'></img></div>
        <div className='section'><img className='photo6'></img></div>
      </div>
    )
  }




  _changeSection(num) {
    let bodyJquery = $('body');
    let className = bodyJquery.attr('class');
    bodyJquery.addClass(`fp-viewing-${num}`).removeClass(className);
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
          <div className='front-page-title'>
            <h1>Imaginary Numblr</h1>
            <div className='math-icons'>
              <div className='exist1'>&exist;</div>
              <div className='forall'>&forall;</div>
              <div className='isin'>&isin;</div>
              <div className='sum'>&sum;</div>
              <div className='math1'>&#x22D9;</div>
              <div className='infin'>&infin;</div>
              <div className='math2'>&#x2230;</div>
              <div className='math3'>&#x22B1;</div>
              <div className='part'>&part;</div>
              <div className='empty'>&empty;</div>
              <div className='math4'>&#x2222;</div>
              <div className='math5'>&#x22C8;</div>
            </div>
            <div
              className="w3-container w3-center w3-animate-bottom"
              style={{marginLeft: '0', marginRight: '0'}}>
              <div className='whatisthis'>Scroll Down for More!</div>
            </div>
          </div>
          <img className='photo1' />
        </div>
      )
    }
  }

}

export default FrontPage;

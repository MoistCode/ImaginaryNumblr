import React from 'react';
import { Route } from 'react-router-dom';

class FrontPage extends React.Component {

  componentDidMount() {
    $('#front_page').fullpage();
  }

  render() {
    return (
      <div id="front_page">
        <div className='section'><img className='photo1'></img></div>
        <div className='section'><img className='photo2'></img></div>
        <div className='section'><img className='photo3'></img></div>
        <div className='section'><img className='photo4'></img></div>
        <div className='section'><img className='photo5'></img></div>
        <div className='section'><img className='photo6'></img></div>
      </div>
    )
  }

}

export default FrontPage;

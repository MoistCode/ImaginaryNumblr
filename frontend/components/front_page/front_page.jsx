import React from 'react';
import NavigationBarContainer from '../navigation_bar/navigation_bar_container';

class FrontPage extends React.Component {

  render() {
    return (
      <div id='main'>
        <NavigationBarContainer />
        <div className='section'></div>
        <div className='section'></div>
        <div className='section'></div>
        <div className='section'></div>
        <div className='section'></div>
        <div className='section'></div>
      </div>
    )
  }

}

export default FrontPage;

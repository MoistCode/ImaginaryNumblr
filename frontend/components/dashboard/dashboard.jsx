import React from 'react';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this._generateFeed = this._generateFeed.bind(this);
  }

  render() {
    return (
      <div className='dash-background'>

        <div className='blog-creation'>
          <img
            className='dash-current-user-image'
            src={this.props.currentUser[0].profileImageUrl} />
          <div className='create-blog-types'>

            <div>
              <i
                className="fa fa-quote-left"
                style={
                  {fontSize:"48px","color":"red"}
                } />
              <p>Quote</p>
            </div>

            <div>
              <i
                className="fa fa-font"
                style={
                  {fontSize:"48px","color":"orange"}
                } />
              <p>Text</p>
            </div>

            <div>
              <i
                className="material-icons"
                style={
                  {fontSize:"48px","color":"green"}
                }>audiotrack</i>
              <p>Audio</p>
            </div>

            <div>
              <i
                className="material-icons"
                style={
                  {fontSize:"48px","color":"blue"}
                } >
                add_a_photo</i>
              <p>Photo</p>
            </div>

            <div>
              <i
                className="fa fa-caret-square-o-right"
                style={
                  {fontSize:"48px","color":"purple"}
                } />
              <p>Video</p>
            </div>

          </div>
        </div>

        {this._generateFeed()}

      </div>
    )
  }

  _generateFeed() {
    return(
      <div className='followed-users-content'>

      </div>
    )
  }

}

export default Dashboard;

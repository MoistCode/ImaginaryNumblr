import React from 'react';
import BlogPostCreationFormContainer from '../forms/blogpost/blogpost_creation_form_container';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this._generateFeed = this._generateFeed.bind(this);
    this._generateForm = this._generateForm.bind(this);
    this.handleCreationModal = this.handleCreationModal.bind(this);
    this.state = {
      creationFormModalIsOpen: false,
      modalContentType: ''
    }
  }

  handleCreationModal(field) {
    this.setState({
      creationFormModalIsOpen: !this.state.creationFormModalIsOpen,
      modalContentType: field
    });

  }

  render() {
    return (
      <div
        className='dash-background'>
        <div className='blog-creation'>
          <img
            className='dash-current-user-image'
            src={this.props.currentUser[0].profileImageUrl} />
          <div className='create-blog-types'>

            <div onClick={(e) => this.handleCreationModal('quote')}>
              <i
                className="fa fa-quote-left"
                style={
                  {fontSize:"48px","color":"red"}
                } />
              <p>Quote</p>
            </div>

            <div onClick={(e) => this.handleCreationModal('text')}>
              <i
                className="fa fa-font"
                style={
                  {fontSize:"48px","color":"orange"}
                } />
              <p>Text</p>
            </div>

            <div onClick={(e) => this.handleCreationModal('audio')}>
              <i
                className="material-icons"
                style={
                  {fontSize:"48px","color":"green"}
                }>audiotrack</i>
              <p>Audio</p>
            </div>

            <div onClick={(e) => this.handleCreationModal('photo')}>
              <i
                className="material-icons"
                style={
                  {fontSize:"48px","color":"blue"}
                } >
                add_a_photo</i>
              <p>Photo</p>
            </div>

            <div onClick={(e) => this.handleCreationModal('video')}>
              <i
                className="fa fa-caret-square-o-right"
                style={
                  {fontSize:"48px","color":"purple"}
                } />
              <p>Video</p>
            </div>


          </div>
        </div>
        {this._generateForm()}

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

  _generateForm() {
    const contentType = this.state.modalContentType;
    if (this.state.creationFormModalIsOpen == true) {
      return (
        <BlogPostCreationFormContainer
          contentType={contentType}
          showDashboard={() => this.handleCreationModal('')}/>
      )
    }
  }
}

export default Dashboard;

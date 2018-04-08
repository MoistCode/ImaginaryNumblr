import React from 'react';

class BlogpostItem extends React.Component {

  constructor(props) {
    super(props);
    this._generateEditForm = this._generateEditForm.bind(this);
  }

  closeEditForm() {
    this.setState({ showEditForm: false })
  }

  render() {
    return (
      <div className='blogpost'>
        {this._generateEditForm()}
        {this._generateAuthorOptions()}
        {this._renderContentType()}
        <div className='blogpost-footer'>
          <div className='footer-likes'>
            <i
              className="fa fa-heart"
              style={{
                fontSize:"24px",
              }}></i>
            <div
              className='like-count'>{Math.floor((Math.random() * 500) + 100)}
            </div>
          </div>
        </div>
      </div>
    )
  }

  _generateEditForm() {
    if (this.state.showEditForm == true) {
      return (
        <div id='creation-modal'>
          <div className='w3-container w3-center w3-animate-opacity'>
            <div id='creation-form'>
              <h2>
                Edit {this.props.blogpost.contentType.charAt(0).toUpperCase() +
                  this.props.blogpost.contentType.slice(1)}
              </h2>
              <i
                onClick={this.closeEditForm}
                className="fa fa-close"></i>
              <form onSubmit={(e) => this.handleSubmit(e)}>
                <label>Title
                  <input
                    type='text'
                    value={this.state.title}
                    onChange={this.update('title')} />
                </label>
                {this._generateForm(this.props.contentType)}
                <button>Submit</button>
              </form>

            </div>

          </div>

        </div>
      )
    }
  }

  _generateAuthorOptions() {
    if (this.props.blogpost.authorId == this.props.currentUser) {
      return (
        <div className='blogpost-header'>
          <div className='header-edit'>
            <i
              onClick={this._generateEditForm}
              className="fa fa-edit"></i>
          </div>
          <div className='header-remove'>
            <i className="fa fa-close"></i>
          </div>
        </div>
      )
    }
  }

  _generateState(contentType) {
    if (contentType == 'quote') {
      return {
        title: '',
        quote: '',
        content_type: contentType,
        [contentType]: '',
        attached_file: '',
        showEditForm: false
      }
    } else if (contentType != 'text') {
        return {
          title: '',
          description: '',
          content_type: contentType,
          [contentType]: '',
          attached_file: '',
          showEditForm: false
        }
    } else {
        return {
          title: '',
          description: '',
          content_type: contentType,
          [contentType]: '',
          showEditForm: false
        }
    }
  }

  _renderContentType() {

    const {
      title,
      contentType,
      description,
      quote,
      attachedFile
    } = this.props.blogpost;
    if (contentType == 'quote') {
      return (
        <div className='blogpost-item'>
          <h1 className='title'>{title}</h1>
          <h1 className='quote'>"{quote}"</h1>
        </div>
      )
    } else if (contentType == 'text') {
      return (
        <div className='blogpost-item'>
          <h1 className='title'>{title}</h1>
          <p>{description}</p>
        </div>
      )
    } else if (contentType == 'audio') {
      return (
        <div className='blogpost-item'>
          <h1 className='title'>{title}</h1>
          <audio controls>
            <source src={attachedFile}></source>
          </audio>
          <p>{description}</p>
        </div>
      )
    } else if (contentType == 'photo') {
      return (
        <div className='blogpost-item'>
          <h1 className='title'>{title}</h1>
          <img src={attachedFile} />
          <p>{description}</p>
        </div>
      )
    } else if (contentType == 'video') {
      return (
        <div className='blogpost-item'>
          <h1 className='title'>{title}</h1>
          <video controls src={attachedFile} />
          <p>{description}</p>
        </div>
      )
    }
  }
}

export default BlogpostItem;

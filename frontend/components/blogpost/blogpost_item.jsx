import React from 'react';

class BlogpostItem extends React.Component {

  constructor(props) {
    super(props);
    this._generateEditForm = this._generateEditForm.bind(this);
    this.state = this._generateState(this.props.blogpost.contentType);
    this.closeEditForm = this.closeEditForm.bind(this);
    this.toggleEditForm = this.toggleEditForm.bind(this);
    this.handleDeletion = this.handleDeletion.bind(this);
  }


  closeEditForm() {
    this.setState({ showEditForm: false })
  }

  toggleEditForm() {
    this.setState({ showEditForm: !this.state.showEditForm })
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('blogpost[title]', this.state.title);
    formData.append('blogpost[content_type]', this.state.content_type);
    formData.append('blogpost[id]', this.props.blogpost.id);
    if(this.state.content_type != 'quote' && this.state.content_type != 'text') {
      formData.append('blogpost[description]]', this.state.description);
    } else if (this.state.content_type == 'quote') {
      formData.append('blogpost[quote]', this.state.quote);
      formData.append('blogpost[quote_source]', this.state.quoteSource);
    } else {
      formData.append('blogpost[description]]', this.state.description);
    }
    this.props.updateBlogpost(formData, this.props.blogpost.id)
      .then(() => window.location.reload())
  }

  handleDeletion() {
    this.props.deleteBlogpost(this.props.blogpost.id)
      .then(() => window.location.reload())
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
        <div id='edit-modal'>
          <div className='w3-container w3-center w3-animate-opacity'>
            <div id='edit-form'>
              <h2>
                Edit {this.props.blogpost.contentType.charAt(0).toUpperCase() +
                  this.props.blogpost.contentType.slice(1)}
              </h2>
              <i
                onClick={this.closeEditForm}
                className="fa fa-close"></i>
              <form onSubmit={(e) => this.handleSubmit(e)}>
                <input
                  type='text'
                  value={this.state.title}
                  onChange={this.update('title')} />
                {this._generateForm(this.props.blogpost.contentType)}
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
              onClick={this.toggleEditForm}
              className="fa fa-edit"></i>
          </div>
          <div className='header-remove'>
            <i
              onClick={this.handleDeletion}
              className="fa fa-close"></i>
          </div>
        </div>
      )
    }
  }

  _generateState(contentType) {
    if (contentType == 'quote') {
      return {
        title: this.props.blogpost.title,
        quote: this.props.blogpost.quote,
        quoteSource: this.props.blogpost.quoteSource,
        content_type: this.props.blogpost.contentType,
        showEditForm: false
      }
    } else if (contentType != 'text') {
        return {
          title: this.props.blogpost.title,
          description: this.props.blogpost.description,
          content_type: this.props.blogpost.contentType,
          attached_file: this.props.blogpost.attachedFile,
          showEditForm: false
        }
    } else {
        return {
          title: this.props.blogpost.title,
          description: this.props.blogpost.description,
          content_type: this.props.blogpost.contentType,
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
          <h1
            className='title'
            style={{fontSize: '22px'}}>{title}
          </h1>
          <h1
            className='quote'
            style={{
              fontStyle: 'italic',
              marginBottom: '10px'
            }}>"{quote}"</h1>
          <p>- {this.props.blogpost.quoteSource}</p>
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

  _generateForm(contentType) {
    switch(contentType) {
      case 'quote':
        return (
          <div>
            <input
              type='text'
              value={this.state.quote}
              onChange={this.update('quote')} />
              <input
                type='text'
                value={`- ${this.state.quoteSource}`}
              onChange={this.update('quoteSource')} />
          </div>
        )
      case 'text':
        return (
          <div>
            <textarea
              value={this.state.description}
              onChange={this.update('description')} />
          </div>
        )
      case 'audio':
        return (
          <div>
            <audio controls>
              <source src={this.props.blogpost.attachedFile}></source>
            </audio>
            <label>Description
              <textarea
                value={this.state.description}
                onChange={this.update('description')} />
            </label>
          </div>
        )
      case 'photo':
        return (
          <div>
            <img src={this.props.blogpost.attachedFile} />
            <label>Description
              <textarea
                value={this.state.description}
                onChange={this.update('description')} />
            </label>
          </div>
        )
      case 'video':
        return (
          <div>
            <label>Description
              <video controls src={this.props.blogpost.attachedFile} />
              <textarea
                value={this.state.description}
                onChange={this.update('description')} />
            </label>
          </div>
        )
    }
  }
}

export default BlogpostItem;

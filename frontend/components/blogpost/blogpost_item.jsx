import React from 'react';

class BlogpostItem extends React.Component {

  constructor(props) {
    super(props);
    this._generateEditForm = this._generateEditForm.bind(this);
    this.state = this._generateState(this.props.blogpost.contentType);
    this.closeEditForm = this.closeEditForm.bind(this);
    this.toggleEditForm = this.toggleEditForm.bind(this);
    this.handleDeletion = this.handleDeletion.bind(this);
    this.toggleDeletion = this.toggleDeletion.bind(this);

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

  toggleDeletion() {
    this.setState({ showDeleteConfirmation: !this.state.showDeleteConfirmation})
  }


  render() {
    return (
      <div className='blogpost'>
        {this._generateEditForm()}
        {this._generateDeletionConfirmation()}
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

  _generateDeletionConfirmation() {
    if (this.state.showDeleteConfirmation == true) {
      return (
        <div className='confirm-delete-modal'>
          <div className='inner-modal'>
            <button className='delete-yes'>Yes</button>
            <button className='delete-no'>No</button>
          </div>
        </div>
      )
    }
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
                  className='edit-title'
                  type='text'
                  placeholder='Title'
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
              onClick={this.toggleDeletion}
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
        showEditForm: false,
        showDeleteConfirmation: false
      }
    } else if (contentType != 'text') {
        return {
          title: this.props.blogpost.title,
          description: this.props.blogpost.description,
          content_type: this.props.blogpost.contentType,
          attached_file: this.props.blogpost.attachedFile,
          showEditForm: false,
          showDeleteConfirmation: false
        }
    } else {
        return {
          title: this.props.blogpost.title,
          description: this.props.blogpost.description,
          content_type: this.props.blogpost.contentType,
          showEditForm: false,
          showDeleteConfirmation: false
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
              className='edit-quote'
              type='text'
              placeholder={"“All mathematicians live in two different worlds."+
              "They live in a crystalline world of perfect platonic forms."+
              "An ice palace. But they also live in the common world where"+
              "things are transient, ambiguous, subject to vicissitudes."+
              "Mathematicians go backward and forward from one world to another."+
              "They’re adults in the crystalline world, infants in the real one.”"}
              value={this.state.quote}
              onChange={this.update('quote')} />
              <input
                type='text'
                value={`${this.state.quoteSource}`}
                placeholder={"- Sylvain Cappell"}
                onChange={this.update('quoteSource')} />
          </div>
        )
      case 'text':
        return (
          <div>
            <textarea
              placeholder={
                "Tell me how your day was.\n" +
                "What did you do?\n" +
                "Anything you want to say about climate change?"
              }
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
            <textarea
              placeholder={
                "This song is the morning bird songs to my day..."
              }
              value={this.state.description}
              onChange={this.update('description')} />
          </div>
        )
      case 'photo':
        return (
          <div>
            <img src={this.props.blogpost.attachedFile} />
            <textarea
              placeholder={
                "Not another photo of someone contemplating..."
              }
              value={this.state.description}
              onChange={this.update('description')} />
          </div>
        )
      case 'video':
        return (
          <div>
            <video controls src={this.props.blogpost.attachedFile} />
            <textarea
              placeholder={
                "Today marks the day I started loving math!"
              }
              value={this.state.description}
              onChange={this.update('description')} />
          </div>
        )
    }
  }
}

export default BlogpostItem;

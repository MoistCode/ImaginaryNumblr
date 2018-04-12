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
    this._generateProfileImageUrl = this._generateProfileImageUrl.bind(this);
    this._currentUserFollow = this._currentUserFollow.bind(this);
    this._generateAuthorOptions = this._generateAuthorOptions.bind(this);
    this._generateAuthorName = this._generateAuthorName.bind(this);
    this.handleUnfollow = this.handleUnfollow.bind(this);
    this._generateLikeIcon = this._generateLikeIcon.bind(this);
    this.handleLike = this.handleLike.bind(this);
    this.handleUnlike = this.handleUnlike.bind(this);
  }

  handleFollow() {
    this.props.postFollow(this.props.user.id)
      .then(() => {
          this.props.fetchUser(this.props.user.id);
    
        }
      )

  }

  handleUnfollow(followeeId) {
    this.props.destroyFollow(followeeId)
      .then(() => {
          this.props.fetchUser(followeeId);
    
        }
      )
  }

  handleLike(blogpostId) {
    this.props.postLike(blogpostId)
      .then(
        () => {
          this.props.fetchBlogpost(blogpostId);
          this.setState({
            currentUserLikes: !this.state.currentUserLikes,
            likeCount: this.state.likeCount + 1
          });
        }
      )
    }

  handleUnlike(blogpostId) {
    this.props.destroyLike(blogpostId)
      .then(
        () => {
          this.props.fetchBlogpost(blogpostId);
          this.setState({
            currentUserLikes: !this.state.currentUserLikes,
            likeCount: this.state.likeCount - 1
          });
        }
      )
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
    const submitButton = $('.edit-submit-button')
    submitButton.prop("disabled", true);
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
      .then(() => {
          submitButton.prop('disabled', false);
    
          this.toggleEditForm();
        }, () => submitButton.prop("disabled", false)
      )
  }

  handleDeletion() {
    this.props.deleteBlogpost(this.props.blogpost.id)
      .then(() => {
  
        this.toggleDeletion();
      })
  }

  toggleDeletion() {
    this.setState({ showDeleteConfirmation: !this.state.showDeleteConfirmation})
  }


  render() {
    return (
      <div className='blogpost'>
        {this._generateDeletionConfirmation()}
        {this._generateEditForm()}
        {this._generateProfileImageUrl()}
        {this._generateAuthorOptions()}
        {this._renderContentType()}
        <div className='blogpost-footer'>
          <div className='footer-likes'>
            {this._generateLikeIcon()}
            <div
              className='like-count'>{this.state.likeCount}
            </div>
          </div>
        </div>
      </div>
    )
  }

  _generateLikeIcon() {
    if (this.state.currentUserLikes) {
      return (
        <i
          className="fa fa-heart"
          onClick={() => this.handleUnlike(this.props.blogpost.id)}
          style={{fontSize: '24px', color: 'red'}}></i>
        )
    } else {
      return (
        <i
          className="fa fa-heart"
          onClick={() => this.handleLike(this.props.blogpost.id)}
          style={{fontSize: '24px'}}></i>
        )
    }
  }

  _generateProfileImageUrl() {
    if (this.props.author != undefined) {
      return (
        <img
          className='blog-profile-pic'
          src={this.props.author.profileImageUrl}
          onClick={() => this.props.history.push(`/${this.props.author.blogUrl}`)}/>
      )
    } else {
      return ''
    }
  }

  _generateDeletionConfirmation() {
    if (this.state.showDeleteConfirmation == true) {
      return (
        <div className='confirm-delete-modal'>
          <div className='inner-modal'>
            <h2>Confirm Deletion</h2>
            <button
              className='delete-no'
              onClick={this.toggleDeletion}>Cancel</button>
            <button
              className='delete-yes'
              onClick={this.handleDeletion}>DELETE</button>
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
                <button
                  className='edit-submit-button'>Submit</button>
                {this._generateErrors(this.props.errors)}
              </form>
            </div>

          </div>

        </div>
      )
    }
  }

  _generateErrors(errArr = []) {
    return errArr.map((err) => <li style={{color: 'red', listStyle: 'none'}}>{err}</li>)
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
    } else {
      return (
        <div className='blogpost-header'>
          <div className='header-follow'>
            {this._currentUserFollow(this.props.currentUser)}
          </div>
          {this._generateAuthorName(this.props.author)}
        </div>
      )
    }
  }

  _currentUserFollow(id) {
    if (this.props.match.path == "/users/:userId") {
      return
      // Maybe do something later here
    }
    if (id == undefined) {
      return
    }
    for(let i = 0; i < this.props.author.followerIds.length; i++) {
      if (this.props.author.followerIds[i] == id) {
        return <p
          onClick={() => this.handleUnfollow(this.props.author.id)}
          >Unfollow</p>;
      }
    }
    return <p>Follow</p>;
  }

  _currentUserLikesBool(id) {
    let doesCurrentUserLike = (blogId) => {
      for(let i = 0; i < this.props.arrayOfCurrentUserLikes.length; i++) {
        if (blogId == this.props.arrayOfCurrentUserLikes[i]) {
          return true;
        }
      }
      return false;
    }

    doesCurrentUserLike = doesCurrentUserLike.bind(this);

    if (this.props.currentUser == 'none' || !doesCurrentUserLike(this.props.blogpost.id)) {
      return false;
    } else {
      return true;
    }
  }

  _generateAuthorName(author) {
    if (author != undefined) {
      return (
        <div className='header-username'>
          {author.username}
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
        showDeleteConfirmation: false,
        currentUserLikes: this._currentUserLikesBool(this.props.blogpost.id),
        likeCount: this.props.blogpost.likerIds.length
      }
    } else if (contentType != 'text') {
        return {
          title: this.props.blogpost.title,
          description: this.props.blogpost.description,
          content_type: this.props.blogpost.contentType,
          attached_file: this.props.blogpost.attachedFile,
          showEditForm: false,
          showDeleteConfirmation: false,
          currentUserLikes: this._currentUserLikesBool(this.props.blogpost.id),
          likeCount: this.props.blogpost.likerIds.length
        }
    } else {
        return {
          title: this.props.blogpost.title,
          description: this.props.blogpost.description,
          content_type: this.props.blogpost.contentType,
          showEditForm: false,
          showDeleteConfirmation: false,
          currentUserLikes: this._currentUserLikesBool(this.props.blogpost.id),
          likeCount: this.props.blogpost.likerIds.length
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

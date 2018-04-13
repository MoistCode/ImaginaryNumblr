import React from 'react';
import BlogPostCreationFormContainer from '../forms/blogpost/blogpost_creation_form_container';
import BlogpostItemContainer from '../blogpost/blogpost_item_container';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this._generateFeed = this._generateFeed.bind(this);
    this._generateForm = this._generateForm.bind(this);
    this._generateFeed = this._generateFeed.bind(this);
    this.handleCreationModal = this.handleCreationModal.bind(this);
    this._generateRecommendedUsers = this._generateRecommendedUsers.bind(this);
    this._generateRecommendedBlogpost = this._generateRecommendedBlogpost.bind(this);
    this._triggerDashRefresh = this._triggerDashRefresh.bind(this);
    this.state = {
      creationFormModalIsOpen: false,
      modalContentType: '',
      creationSubmitted: false,
      listOfBlogposts: this.props.listOfBlogposts
    }

  }

  componentWillMount() {

  }

  componentDidMount() {
    const arrOfUserIds = this.props.currentUser[0].followeeIds.concat(this.props.currentUser[0].id);
    this.props.fetchUsers(arrOfUserIds)
    .then(
      (payload) => {
        let arrOfBlogpostIds = []
        Object.values(payload.users.users).forEach((user) => {
          arrOfBlogpostIds = arrOfBlogpostIds.concat(user.blogpostIds);
        });
        this.props.fetchBlogposts(arrOfBlogpostIds);
      }
    )
    // const arrOfUserIds = this.props.currentUser[0].followeeIds.concat(this.props.currentUser[0].id);
    // this.props.fetchUsers(arrOfUserIds)
    //   .then(
    //     (payload) => {
    //       let arrOfBlogpostIds = []
    //       Object.values(payload.users.users).forEach((user) => {
    //         arrOfBlogpostIds = arrOfBlogpostIds.concat(user.blogpostIds);
    //       });
    //       this.props.fetchBlogposts(arrOfBlogpostIds);
    //     }
    //   )
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.currentUser[0].followeeIds.length != nextProps.currentUser[0].followeeIds.length) {
      const arrOfUserIds = this.props.currentUser[0].followeeIds.concat(this.props.currentUser[0].id);
      this.props.fetchUsers(arrOfUserIds)
      .then(
        (payload) => {
          let arrOfBlogpostIds = []
          Object.values(payload.users.users).forEach((user) => {
            arrOfBlogpostIds = arrOfBlogpostIds.concat(user.blogpostIds);
          });
          this.props.fetchBlogposts(arrOfBlogpostIds);

        }
      )
    }
  }

  handleCreationModal(field) {
    if (field == '') {
      this.setState({
        creationFormModalIsOpen: false,
        modalContentType: field
      });
    } else {
      this.setState({
        creationFormModalIsOpen: true,
        modalContentType: field
      });
    }
    this.props.clearErrors();
  }

  render() {
    return (
      <div className='dash-background'>
        <div className='blog-creation'>
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
        <aside className='dash-right-side'>
          {this._generateRecommendedUsers()}
          {this._generateRecommendedBlogpost()}
        </aside>
        {this._generateForm()}
        {this._generateFeed()}
      </div>
    )
  }

  _triggerDashRefresh() {

    const arrOfUserIds = this.props.currentUser[0].followeeIds.concat(this.props.currentUser[0].id);
    this.props.fetchUsers(arrOfUserIds)
      .then(
        (payload) => {
          let arrOfBlogpostIds = []
          Object.values(payload.users.users).forEach((user) => {
            arrOfBlogpostIds = arrOfBlogpostIds.concat(user.blogpostIds);
          });
          this.props.fetchBlogposts(arrOfBlogpostIds);
        }
      )
  }

  _generateRecommendedUsers() {
    return (
      <div className='dash-recommended-users'>
        <header>Recommended Users</header>
        <div className='recUsers'>
          {this.props.listOfRandomUsers.map((user) => <li key={Math.random() * Math.random()}><img
            src={user.profileImageUrl}
            onClick={() => this.props.history.push(`/${user.blogUrl}`)}/>
          {user.username}<i
                            className='fa fa-plus-square'
                            style={this._generateUserFollowedIconColor(user.id)} /></li>)}
        </div>
        <p>Explore All of ImaginaryNumblr</p>
      </div>
    )
  }

  _generateUserFollowedIconColor(id) {
    for(let i = 0; i < this.props.currentUser[0].followeeIds.length; i++) {
      if (id == this.props.currentUser[0].followeeIds[i]) {
        return { color: '#A7CAE9' };
      }
    }
  }


  _generateRecommendedBlogpost() {
    const blogpost = this.props.randomBlogpost;
    if (blogpost != undefined && this.props.listOfUsers[0] != undefined) {
      let author;
      for(let i = 0; i < this.props.listOfUsers.length; i++) {
        if(this.props.listOfUsers[i].id == blogpost.authorId) {
          author = this.props.listOfUsers[i];
        }
      }

      return (
        <div className='dash-recommended-blogpost'>
          <header>Blogdar</header>
          <div className='rec-bp-user-info'>
            <li key={Math.random() * Math.random()}><img
              src={author.profileImageUrl}
              onClick={() => this.props.history.push(`/${author.blogUrl}`)}/>
            {author.username}<i
                              className='fa fa-plus-square'
                              style={this._generateUserFollowedIconColor(author.id)} /></li>
          </div>
          <div className='rec-bp'>
            {this._renderRandomBlog(blogpost)}
          </div>
        </div>
      )
    }
  }

  _generateFeed() {
    let undefinedItem = false;

    for(let i = 0; i < this.props.listOfBlogposts.length; i++) {
      if (this.props.listOfBlogposts[i] == undefined) {
        undefinedItem = true;
      }
    }

    for(let i = 0; i < this.props.listOfUsers.length; i++) {
      if (this.props.listOfUsers[i] == undefined) {
        undefinedItem = true;
      }
    }

    if (!undefinedItem) {
      return (
        this.props.listOfBlogposts.map((blogpost) => <BlogpostItemContainer
                                                        key={blogpost.id}
                                                        blogpost={blogpost}
                                                        author={this._getAuthorFromBlogpost(blogpost.authorId)}
                                                        createdSubmitted={this._triggerDashRefresh}/>
                                      )
      )
    }
  }

  _getAuthorFromBlogpost(blogpostAuthorId) {
    for(let i = 0; i < this.props.listOfUsers.length; i++) {
      if (this.props.listOfUsers[i].id == blogpostAuthorId) {
        return this.props.listOfUsers[i];
      }
    }
  }

  _generateForm() {
    const contentType = this.state.modalContentType;
    if (this.state.creationFormModalIsOpen == true) {
      return (
        <BlogPostCreationFormContainer
          contentType={contentType}
          showDashboard={() => {this.handleCreationModal('')}}
          createdSubmitted={this._triggerDashRefresh}/>
      )
    }
  }

  _renderRandomBlog(blogpost) {

    const {
      title,
      contentType,
      description,
      quote,
      attachedFile
    } = blogpost;
    if (contentType == 'quote') {
      return (
        <div className='rec-blogpost-item'>
          <h1
            className='rec-title'
            style={{fontSize: '22px'}}>{title}
          </h1>
          <h1
            className='rec-quote'
            style={{
              fontStyle: 'italic',
              marginBottom: '10px'
            }}>"{quote}"</h1>
          <p>{blogpost.quoteSource}</p>
        </div>
      )
    } else if (contentType == 'text') {
      return (
        <div className='rec-blogpost-item'>
          <h1 className='rec-title'>{title}</h1>
          <p>{description}</p>
        </div>
      )
    } else if (contentType == 'audio') {
      return (
        <div className='rec-blogpost-item'>
          <h1 className='rec-title'>{title}</h1>
          <audio controls>
            <source src={attachedFile}></source>
          </audio>
          <p>{description}</p>
        </div>
      )
    } else if (contentType == 'photo') {
      return (
        <div className='rec-blogpost-item'>
          <h1 className='rec-title'>{title}</h1>
          <img src={attachedFile} />
          <p>{description}</p>
        </div>
      )
    } else if (contentType == 'video') {
      return (
        <div className='rec-blogpost-item'>
          <h1 className='rec-title'>{title}</h1>
          <video controls src={attachedFile} />
          <p>{description}</p>
        </div>
      )
    }
  }

}

export default Dashboard;

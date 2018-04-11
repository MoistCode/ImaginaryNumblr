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
    this._triggerDashRefresh = this._triggerDashRefresh.bind(this);
    this.state = {
      creationFormModalIsOpen: false,
      modalContentType: '',
      creationSubmitted: false
    }
  }

  componentWillMount() {
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

  componentDidMount() {
    console.log('running1');
  }

  handleCreationModal(field) {
    this.props.clearErrors();
    this.setState({
      creationFormModalIsOpen: !this.state.creationFormModalIsOpen,
      modalContentType: field
    });

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
          {this.props.listOfRandomUsers.map((user) => <li><img
            src={user.profileImageUrl}
            onClick={() => this.props.history.push(`/${user.blogUrl}`)}/>
          {user.username}<i
                            className='fa fa-plus-square'
                            style={this._generateUserFollowedIconColor(user.id)} /></li>)}
        </div>
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

  // {this._generateRecommendedBlogpost()}
  // _generateRecommendedBlogpost() {
  //   return (
  //     <div className='dash-recommended-blogpost'>
  //       <header>Blogdar</header>
  //       <div></div>
  //       <div></div>
  //       <button>cdsccdsc</button>
  //     </div>
  //   )
  // }

  _generateFeed() {
    if (this.props.listOfBlogposts.length > 0) {
      return (
        this.props.listOfBlogposts.map((blogpost) => <BlogpostItemContainer
                                                        key={blogpost.id}
                                                        blogpost={blogpost}
                                                        author={this._getAuthorFromBlogpost(blogpost.authorId)}/>
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

}

export default Dashboard;

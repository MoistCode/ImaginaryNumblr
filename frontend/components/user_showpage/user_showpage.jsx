import React from 'react';
import BlogpostItemContainer from '../blogpost/blogpost_item_container';


class UserShowPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleFollow = this.handleFollow.bind(this);
    this.handleUnfollow = this.handleUnfollow.bind(this);
  }

  componentDidMount() {
    if($('html').hasClass('fp-enabled')){
      $.fn.fullpage.destroy('all');
    }
    this.props.fetchUser(this.props.match.params.userId)
      .then(
        () => this.props.fetchUserBlogposts(this.props.user.blogpostIds),
        () => this.props.history.push('/404meansthispagedoesnotexist')
      )

  }

  componentWillReceiveProps(nextProps) {
    if (this.props.user.id != nextProps.match.params.userId) {
      this.props.fetchUser(nextProps.match.params.userId)
        .then(
          () => this.props.fetchUserBlogposts(nextProps.user.blogpostIds),
          () => this.props.history.push('/404meansthispagedoesnotexist')
        );
    } else if (this.props.user.id == nextProps.match.params.userId) {
    }
  }

  handleFollow() {
    this.props.postFollow(this.props.user.id)
      .then(() => {
          this.props.fetchUser(this.props.user.id);
          window.location.reload();
        }
      )

  }

  handleUnfollow() {
    this.props.destroyFollow(this.props.user.id)
      .then(() => {
          this.props.fetchUser(this.props.user.id);
          window.location.reload();
        }
      )

  }

  render() {
    if (this.props.user == 'none') {
      return (
        <div className='user-showpage'>
          <p>Loading...</p>
        </div>
      )
    }
    const viewUser = this.props.user
    // Create an if statement that returns a loading screen if the fetching has
    // not been done yet
    // Also create a condition where if there is no user by that id
    return (
      <div className='user-showpage'>
        <div className='user-info'>
          <img
            src={viewUser.profileImageUrl}
            style={{ 'width': '100px', 'height': '100px', marginBottom: '7px' }}>
          </img>
          <div className='user-info-buttons'>
            <button onClick={() => this.props.history.push('/')}>Home</button>
            <button>Archive</button>
            <button>About Me</button>
            {this._generateFollowButton()}
          </div>
          <div className='user-info-show'>
            <p>{`Welcome to ${this.props.user.username}'s Blogpage!`}</p>
            <p>Followers: </p>
            <p>Following:</p>
          </div>
        </div>
        <div className='user-blogs'>
          {this._generateUserBlogs()}
        </div>
        <footer></footer>
      </div>
    )
  }

  _generateFollowButton() {
    if (this.props.currentUser == 'none') {
      // Do something here later
    } else if (this.props.currentUserFollows.indexOf(this.props.user.id) > -1) {
      return <button className='follow-button' onClick={this.handleUnfollow}>Unfollow</button>
    } else if (this.props.user.id != this.props.currentUser.id) {
      return <button className='follow-button' onClick={this.handleFollow}>Follow</button>
    }
  }

  _generateUserBlogs() {
    if (this.props.blogposts && this.props.blogposts[0]) {
      return (
        this.props.blogposts.map((blogpost) => <BlogpostItemContainer key={blogpost.id} blogpost={blogpost} listOfUsers={this.props.currentUser}/>)
      )
    }
  }

}

export default UserShowPage;

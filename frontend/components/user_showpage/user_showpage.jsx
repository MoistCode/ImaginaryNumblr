import React from 'react';
import BlogpostItemContainer from '../blogpost/blogpost_item_container';


class UserShowPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleFollow = this.handleFollow.bind(this);
    this.handleUnfollow = this.handleUnfollow.bind(this);
  }

  componentDidMount() {
    // if($('html').hasClass('fp-enabled')){
    //   $.fn.fullpage.destroy('all');
    // }
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

        }
      )

  }

  handleUnfollow() {
    this.props.destroyFollow(this.props.user.id)
      .then(() => {
          this.props.fetchUser(this.props.user.id);

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

    return (
      <div className='user-showpage'>
        <div className='user-info'>
          <img
            src={viewUser.profileImageUrl}
            style={{ 'width': '100px', 'height': '100px', marginBottom: '7px' }}>
          </img>
          <div className='user-info-buttons'>
            <button onClick={() => {
                this.props.history.push('/');
              }}>Home</button>
            <button>Archive</button>
            <button>About Me</button>
            {this._generateFollowButton()}
          </div>
          <div className='user-info-show'>
            <p>{`Welcome to ${this.props.user.username}'s Blogpage!`}</p>
            <p>Followers: {this.props.user.followerIds.length}</p>
            <p>Following: {this.props.user.followeeIds.length}</p>
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
      return
    } else if (this.props.currentUserFollows.indexOf(this.props.user.id) > -1) {
      return <button className='follow-button' onClick={this.handleUnfollow}>Unfollow</button>
    } else if (this.props.user.id != this.props.currentUser.id) {
      return <button className='follow-button' onClick={this.handleFollow}>Follow</button>
    }
  }

  _generateUserBlogs() {
    let arr = [];

    for(let i = 0; i < this.props.blogposts.length; i++) {
      if (this.props.blogposts[i] != undefined){
        arr.push(this.props.blogposts[i]);
      }
    }
    return (
      arr.map((blogpost) => <BlogpostItemContainer key={blogpost.id} blogpost={blogpost} listOfUsers={this.props.currentUser}/>)
    )

  }

}

export default UserShowPage;

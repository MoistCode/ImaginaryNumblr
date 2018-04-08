import React from 'react';
import BlogPostItem from '../blogpost/blogpost_item';


class UserShowPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // fetch username, blogposts, and profile picture here
    this.props.fetchUser(this.props.match.params.userId);
    if (this.props.user.blogpostIds != undefined) {
      this.props.fetchUserBlogposts(this.props.user.blogpostIds);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.user.id != nextProps.match.params.userId) {
      this.props.fetchUser(nextProps.match.params.userId);
      this.props.fetchUserBlogposts(nextProps.user.blogpostIds);
    }
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
            style={{ 'width': '100px', 'height': '100px' }}>

          </img>
        </div>
        <div className='user-blogs'>
        </div>
        {this._generateUserBlogs()}
        <footer>Nothing to see here</footer>
      </div>
    )
  }

  _generateUserBlogs() {
    if (this.props.blogposts) {
      return (
        this.props.blogposts.map((blogpost) => <BlogPostItem key={blogpost.id} blogpost={blogpost}/>)
      )
    }
  }

}

export default UserShowPage;

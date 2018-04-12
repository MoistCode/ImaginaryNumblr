import React from 'react';
import merge from 'lodash/merge';
import BlogpostItemContainer from '../blogpost/blogpost_item_container';

class LikeShowPage extends React.Component {
  constructor(props) {
    super(props);
    this._getAuthorFromBlogpost = this._getAuthorFromBlogpost.bind(this);
    this._generateFeed = this._generateFeed.bind(this);
  }

  componentDidMount() {
    this.props.fetchBlogposts(this.props.currentUser.likedBlogIds)
      .then((blogposts) => {
        let arrOfUserIds = Object.values(blogposts.blogposts.blogposts).map((blogpost) => blogpost.authorId);
        this.props.fetchUsers(arrOfUserIds);
      })
  }

  render() {
    if (this.props.authorObjects == 'none') {
      return (
        <div>Loading</div>
      )
    }
    let undefinedAuthor = false;
    for(let i = 0; i < this.props.authorObjects.length; i++) {
      if (this.props.authorObjects[i] == undefined) {
        undefinedAuthor = true;
      }
    }
    if (undefinedAuthor) {
      return (
        <div>Loading</div>
      )
    }

    return (
      <div className='like-showpage'>
        { this._generateFeed() }
      </div>
    )
  }

  _generateFeed() {
    if (this.props.blogpostObjects.length > 0) {
      return (
        this.props.blogpostObjects.reverse().map((blogpost) => <BlogpostItemContainer
                                                        key={blogpost.id}
                                                        blogpost={blogpost}
                                                        author={this._getAuthorFromBlogpost(blogpost.authorId)}
                                                        createdSubmitted={this._triggerDashRefresh}/>
                                      )
      )
    }
  }

  _getAuthorFromBlogpost(authorId) {
    for(let i = 0; i < this.props.authorObjects.length; i++) {
      if (this.props.authorObjects[i].id == authorId) {
        return this.props.authorObjects[i];
      }
    }
  }
}

export default LikeShowPage;

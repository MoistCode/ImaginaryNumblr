import { connect } from 'react-redux';
import LikeShowPage from './like_showpage';
import { fetchBlogposts } from '../../actions/blogpost_actions';
import { fetchUsers } from '../../actions/user_actions';

const mapStateToProps = (state) => ({
  currentUser: Object.values(state.session.currentUser.users)[0],
  blogpostObjects: _getBlogpostObjects(Object.values(state.session.currentUser.users)[0].likedBlogIds, state.blogposts),
  authorObjects: _getAuthorObjects(Object.values(state.session.currentUser.users)[0].likedBlogIds, state.users, state.blogposts)
});

const mapDispatchToProps = (dispatch) => ({
  fetchBlogposts: (blogpostIds) => dispatch(fetchBlogposts(blogpostIds)),
  fetchUsers: (userIds) => dispatch(fetchUsers(userIds))
});

const _getBlogpostObjects = (arrOfCurUserLikes, blogposts) => {
  return arrOfCurUserLikes.map((id) => blogposts[id]);
};

const _getAuthorObjects = (arrOfCurUserLikes, users, blogposts) => {
  const arrOfBlogs = arrOfCurUserLikes.map((id) => blogposts[id]);

  let undefinedBlogs = false;

  for(let i = 0; i < arrOfBlogs.length; i++) {
    if (arrOfBlogs[i] == undefined) {
      undefinedBlogs = true;
    }
  }
  if (undefinedBlogs) {
    return 'none';
  }

  const arrOfAuthorIds = arrOfBlogs.map((blog) => blog.authorId)
  if (arrOfAuthorIds[0] == undefined || users[arrOfAuthorIds[0]] == undefined) {
    return 'none';
  }

  let uniqArrOfAuthorIds = [];

  for(let i = 0; i < arrOfAuthorIds.length; i++) {
    let included = false;
    for(let j = 0; j < uniqArrOfAuthorIds.length; j++) {
      if (arrOfAuthorIds[i] == uniqArrOfAuthorIds[j]) {
        included = true;
      }
    }
    if (!included) {
      uniqArrOfAuthorIds.push(arrOfAuthorIds[i])
    }
  }

  return uniqArrOfAuthorIds.map((authorId) => users[authorId]);
}

export default connect(mapStateToProps, mapDispatchToProps)(LikeShowPage);

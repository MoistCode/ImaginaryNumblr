import { connect } from 'react-redux';
import LikeShowPage from './like_showpage';
import { fetchBlogposts } from '../../actions/blogpost_actions';
import { fetchUsers } from '../../actions/user_actions';

const mapStateToProps = (state) => {
  const curUserObj = state.currentUser.users


  currentUser:
  blogpostObjects:
  authorObjects:
};

const mapDispatchToProps = (dispatch) => {

};

const _getBlogpostObjects = () => {

};

const _getAuthorObjects = () => {

};

export default connect(mapStateToProps, mapDispatchToProps)(LikeShowPage);

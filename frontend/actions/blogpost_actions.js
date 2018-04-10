import * as BlogpostUtil from '../util/blogpost_util'

export const RECEIVE_BLOGPOSTS = 'RECEIVE_BLOGPOSTS';
export const RECEIVE_BLOGPOST = 'RECEIVE_BLOGPOST';
export const REMOVE_BLOGPOST = 'REMOVE_BLOGPOST';
export const RECEIVE_BLOGPOST_ERRORS = 'RECEIVE_BLOGPOST_ERRORS';
export const RECEIVE_CLEARED_ERRORS = 'RECEIVE_CLEARED_ERRORS';

export const fetchBlogposts = (blogpostIds) => (dispatch) => BlogpostUtil.fetchBlogposts(blogpostIds)
  .then(
    (blogposts) => dispatch(receiveBlogposts(blogposts)),
    (errors) => dispatch(receiveBlogpostErrors(errors.responseJSON))
  )

export const fetchBlogpost = (blogpostId) => (dispatch) => BlogpostUtil.fetchBlogpost(blogpostId)
  .then(
    (blogpost) => dispatch(receiveBlogpost(blogpost)),
    (errors) => dispatch(receiveBlogpostErrors(errors.responseJSON))
  );

export const postBlogpost = (blogpost) => (dispatch) => BlogpostUtil.postBlogpost(blogpost)
  .then(
    (blogpost) => dispatch(receiveBlogpost(blogpost)),
    (errors) => dispatch(receiveBlogpostErrors(errors.responseJSON))
  );

export const updateBlogpost = (blogpost, blogpostId) => (dispatch) => BlogpostUtil.updateBlogpost(blogpost, blogpostId)
  .then(
    (blogpost) => dispatch(receiveBlogpost(blogpost)),
    (errors) => dispatch(receiveBlogpostErrors(errors.responseJSON))
  );

export const deleteBlogpost = (blogpostId) => (dispatch) => BlogpostUtil.deleteBlogpost(blogpostId)
  .then(
    (blogpost) => dispatch(removeBlogpost(blogpostId)),
    (errors) => dispatch(receiveBlogpostErrors(errors.responseJSON))
  );

export const clearErrors = () => (dispatch) => dispatch(receiveClearedErrors());

const receiveBlogposts = (blogposts) => ({
  type: RECEIVE_BLOGPOSTS,
  blogposts
});

const receiveBlogpost = (blogpost) => {
  debugger;
  return { type: RECEIVE_BLOGPOST, blogpost }
};

const removeBlogpost = (blogpostId) => ({
  type: REMOVE_BLOGPOST,
  blogpostId
});

const receiveBlogpostErrors = (errors) => ({
  type: RECEIVE_BLOGPOST_ERRORS,
  errors
});

const receiveClearedErrors = () => ({
  type: RECEIVE_CLEARED_ERRORS
});

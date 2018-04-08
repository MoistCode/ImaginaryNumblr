import * as BlogpostUtil from '../util/blogpost_util'

export const RECEIVE_BLOGPOSTS = 'RECEIVE_BLOGPOSTS';
export const RECEIVE_BLOGPOST = 'RECEIVE_BLOGPOST';
export const REMOVE_BLOGPOST = 'REMOVE_BLOGPOST';
export const RECEIVE_BLOGPOST_ERRORS = 'RECEIVE_BLOGPOST_ERRORS';

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

export const updateBlogpost = (blogpost) => (dispatch) => BlogpostUtil.updateBlogpost(blogpost)
  .then(
    (blogpost) => dispatch(receiveBlogpost(blogpost)),
    (errors) => dispatch(receiveBlogpostErrors(errors.responseJSON))
  )

const receiveBlogposts = (blogpost) => ({
  type: RECEIVE_BLOGPOSTS,
  blogposts
});

const receiveBlogpost = (blogpost) => ({
  type: RECEIVE_BLOGPOST,
  blogpost
});

const receiveBlogpostErrors = (errors) => ({
  type: RECEIVE_BLOGPOST_ERRORS,
  errors
})

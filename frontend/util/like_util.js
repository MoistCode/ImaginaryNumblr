export const postLike = (blogId) => (
  $.ajax({
    method: 'POST',
    url: '/likes',
    data: { like: { liked_blog_id: blogId } }
  })
);

export const destroyLike = (blogId) => (
  $.ajax({
    method: 'DELETE',
    url: `/likes/${blogId}`
  })
);

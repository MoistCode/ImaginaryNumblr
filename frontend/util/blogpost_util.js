export const fetchBlogposts = (blogpostIds) => {
  return (
    $.ajax({
      method: 'GET',
      url: '/blogposts',
      data: { blogpost: { blogpostIds } }
    })
  )
};

export const fetchBlogpost = (blogpostId) => (
  $.ajax({
    method: 'GET',
    url: `/blogposts/${blogpostId}`
  })
);

export const updateBlogpost = (blogpost, blogpostId) => (
  $.ajax({
    method: 'PATCH',
    url: `/blogposts/${blogpostId}`,
    contentType: false,
    processData: false,
    dataType: 'json',
    data: blogpost
  })
);

export const postBlogpost = (blogpost) => (
  $.ajax({
    method: 'POST',
    url: '/blogposts',
    contentType: false,
    processData: false,
    dataType: 'json',
    data: blogpost
  })
);

export const deleteBlogpost = (blogpostId) => (
  $.ajax({
    method: 'DELETE',
    url: `/blogposts/${blogpostId}`
  })
);

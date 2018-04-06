export const fetchBlogpostsByAuthor = (authorId) => ({

});

export const fetchBlogpost = (blogpostId) => ({
  $.ajax({
    method: 'GET',
    url: `/blogposts/${blogpostId}`
  })
});

export const fetchBlogpostForEdit = (blogpostId) => ({
  $.ajax({
    method: 'GET',
    url: `/blogposts/${blogpostId}/edit`
  })
});

export const updateBlogpost = (blogpost) => ({
  $.ajax({
    method: 'PATCH',
    url: `/blogposts/${blogpost.id}`,
    data: { blogpost }
  })
});

export const postBlogpost = (blogpost) => ({
  $.ajax({
    method: 'POST',
    url: '/blogposts',
    data: { blogpost }
  })
});

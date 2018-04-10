export const fetchUsers = (userIds) => (
  $.ajax({
    method: 'GET',
    url: '/api/users',
    data: { user: { userIds } }
  })
)

export const fetchUser = (userId) => {
  return (
    $.ajax({
      method: 'GET',
      url: `/api/users/${userId}`
    })
  )
};

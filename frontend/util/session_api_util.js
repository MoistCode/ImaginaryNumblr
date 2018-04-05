export const signup = (user) => {
  console.log('signup ajax call');
  return (
    $.ajax({
      method: 'POST',
      url: '/api/user',
      contentType: false,
      processData: false,
      dataType: 'json',
      data: user
    })
  )
};

export const login = (user) => {
  return (
    $.ajax({
      method: 'POST',
      url: '/api/session',
      contentType: false,
      processData: false,
      dataType: 'json',
      data: user
    })
  )
};

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);

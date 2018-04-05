export const signup = (user) => (
  $.ajax({
    method: 'POST',
    url: '/api/user',
    contentType: false,
    processData: false,
    dataType: 'json',
    data: user
  })
);

export const login = (user) => {
  debugger;
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
}

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);

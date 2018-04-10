export const postFollow = (followeeId) => (
  $.ajax({
    method: 'POST',
    url: '/follows',
    data: { follow: { followee_id: followeeId } }
  })
);

export const destroyFollow = (followeeId) => (
  $.ajax({
    method: 'DELETE',
    url: `/follows/${followeeId}`
  })
)

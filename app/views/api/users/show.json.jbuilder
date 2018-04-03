json.users do
  json.set! @user.id do
    json.username, @user.username
    json.blogUrl, "/users/#{@user.id}"
    json.profileImageUrl, @user.profile_picture_url
    json.currentUserFollow, false
    json.followerCount, 100
  end
end

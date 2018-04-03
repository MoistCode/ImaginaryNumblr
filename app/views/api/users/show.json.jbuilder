json.users do
  json.set! @user.id do
    json.id @user.id
    json.username @user.username
    json.blogUrl "/users/#{@user.id}"
    json.profileImageUrl @user.profile_picture_url
  end
end

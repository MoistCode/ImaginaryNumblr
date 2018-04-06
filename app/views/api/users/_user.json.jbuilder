json.users do
  json.set! user.id do
    json.id user.id
    json.username user.username
    json.blogUrl "api/users/#{user.id}"
    json.profileImageUrl asset_path(user.profile_picture_url.url(:original))

  end
end

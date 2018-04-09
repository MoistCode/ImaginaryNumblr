json.users do
  json.set! user.id do
    json.id user.id
    json.username user.username
    json.blogUrl "users/#{user.id}"
    json.profileImageUrl asset_path(user.profile_picture_url.url(:original))

    blog_arr = []
    user.blogposts.each do |blogpost|
      blog_arr.push(blogpost.id)
    end
    json.blogpostIds blog_arr

    follower_arr = []
    user.followers.each do |follower|
      follower_arr.push(follower.follower_id)
    end
    json.followerIds follower_arr

    follows_arr = []
    user.follows.each do |followee|
      follows_arr.push(followee.followee_id)
    end
    json.followeeIds follows_arr
  end
end

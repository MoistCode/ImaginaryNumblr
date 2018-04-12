# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

seed_image_arr = [
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/wm.png",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/animeg.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/anon.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/atm.png",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/bloop.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/bloop2.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/cat-profile.png",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/ch.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/cowcake.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/crai.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/haccked.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/penguin.png",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/pku.png",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/r18.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/r21.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/r24.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/r34.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/r47.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/rockt.png",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/rando.jpeg"
]

User.create(
  username: 'username',
  password: 'password',
  email: 'demouser@demouser.demo.uk'
)

100.times do
  User.create(
    username:Faker::Internet.user_name(5..8),
    password: 'password',
    email: Faker::Internet.safe_email,
    seed_image: seed_image_arr[Random.rand(20)]
  )
end

# 500 times (Content)
# Randomize user ID
# Randomize Content Type
  # 1 = quote
  # 2 = text
  # 3 = audio
  # 4 = photo
  # 5 = video

# 1000 times (Likes)
# Generate pairs of two numbers
# Push into an array if it's not in there
# Create Like
like_arr = []

5000.times do
  generated_arr = [Random.rand(100) + 1, Random.rand(500) + 1]
  while like_arr.include?(generated_arr)
    generated_arr = [Random.rand(100) + 1, Random.rand(100) + 1]
  end
  like_arr << generated_arr
end

like_arr.each do |arr|
  Like.create(
    liker_id: arr[0],
    liked_blog_id: arr[1]
  )
end

# 500 times (Follows)
  # Generate pairs of two numbers
  # Push into an array if it's not in there
  # Create Follow
follow_arr = []
1000.times do
  generated_arr = [Random.rand(100) + 1, Random.rand(100) + 1]
  while follow_arr.include?(generated_arr) && generated_arr[0] == generated_arr[1]
    generated_arr = [Random.rand(100) + 1, Random.rand(100) + 1]
  end
  follow_arr << generated_arr
end

follow_arr.each do |arr|
  Follow.create(
    follower_id: arr[0],
    followee_id: arr[1]
  )
end

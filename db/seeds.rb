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
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/rockt.png"
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

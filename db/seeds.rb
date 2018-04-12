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
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/rando.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/r1.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/r10.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/r12.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/r13.png",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/r14.png",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/r20.jpeg"
]
seed_audio_arr = [

]
seed_photo_arr = [

]
seed_video_arr = [

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
    seed_image: seed_image_arr[Random.rand(26)]
  )
end

# 1000 times (Content)
# Randomize user ID
# Randomize Content Type
  # 1 = quote
  # 2 = text
  # 3 = audio
  # 4 = photo
  # 5 = video
1000.times do
  content_type = Random.rand(5) + 1
  seed_data = Random.rand(5) +1
  author = Random.rand(100) + 1

  case content_type
  when 1
    case seed_data
    when 1
      Blogpost.create(
        title: Faker::Book.title,
        quote: Faker::ChuckNorris.fact,
        content_type: 'quote',
        author_id: Random.rand(100) + 1,
        quote_source: Faker::LeagueOfLegends.champion
      )
    when 2
      Blogpost.create(
        title: Faker::LordOfTheRings.location,
        quote: Faker::FamilyGuy.quote,
        content_type: 'quote',
        author_id: Random.rand(100) + 1,
        quote_source: Faker::DrWho.character
      )
    when 3
      Blogpost.create(
        title: Faker::Book.genre,
        quote: Faker::BackToTheFuture.quote,
        content_type: 'quote',
        author_id: Random.rand(100) + 1,
        quote_source: Faker::Book.author
      )
    when 4
      Blogpost.create(
        title: Faker::FamilyGuy.character,
        quote: Faker::Movie.quote,
        content_type: 'quote',
        author_id: Random.rand(100) + 1,
        quote_source: Faker::HarryPotter.character
      )
    when 5
      Blogpost.create(
        title: Faker::BackToTheFuture.character,
        quote: Faker::LeagueOfLegends.quote,
        content_type: 'quote',
        author_id: Random.rand(100) + 1,
        quote_source: Faker::GameOfThrones.character
      )
    end
  when 2
    case seed_data
    when 1
      Blogpost.create(
        title: Faker::LordOfTheRings.location,
        description: Faker::Hacker.say_something_smart,
        content_type: 'text',
        author_id: Random.rand(100) + 1,
      )
    when 2
      Blogpost.create(
        title: Faker::Hacker.noun,
        description: Faker::LeagueOfLegends.quote,
        content_type: 'text',
        author_id: Random.rand(100) + 1,
      )
    when 3
      Blogpost.create(
        title: Faker::LeagueOfLegends.masteries,
        description: Faker::WorldOfWarcraft.quote,
        content_type: 'text',
        author_id: Random.rand(100) + 1,
      )
    when 4
      Blogpost.create(
        title: Faker::LeagueOfLegends.quote,
        description: Faker::Coffee.notes,
        content_type: 'text',
        author_id: Random.rand(100) + 1,
      )
    when 5
      Blogpost.create(
        title: Faker::DrWho.quote,
        description: Faker::LeagueOfLegends.quote,
        content_type: 'text',
        author_id: Random.rand(100) + 1,
      )
    end
  when 3
    case seed_data
    when 1
      Blogpost.create(
        title: Faker::LeagueOfLegends.masteries,
        description: Faker::SiliconValley.quote,
        content_type: 'audio',
        author_id: Random.rand(100) + 1,
      )
    when 2
      Blogpost.create(
        title: Faker::Book.title,
        description: Faker::WorldOfWarcraft.quote,
        content_type: 'audio',
        author_id: Random.rand(100) + 1,
      )
    when 3
      Blogpost.create(
        title: Faker::LeagueOfLegends.quote,
        description: Faker::SiliconValley.quote,
        content_type: 'audio',
        author_id: Random.rand(100) + 1,
      )
    when 4
      Blogpost.create(
        title: Faker::Coffee.blend_name,
        description: Faker::StarWars.quote,
        content_type: 'audio',
        author_id: Random.rand(100) + 1,
      )
    when 5
      Blogpost.create(
        title: Faker::Hacker.ingverb,
        description: Faker::Coffee.notes,
        content_type: 'audio',
        author_id: Random.rand(100) + 1,
      )
    end
  when 4
    case seed_data
    when 1
      Blogpost.create(
        title: Faker::Book.title,
        description: Faker::StarWars.quote,
        content_type: 'photo',
        author_id: Random.rand(100) + 1,
      )
    when 2
      Blogpost.create(
        title: Faker::Superhero.descriptor,
        description: Faker::WorldOfWarcraft.quote,
        content_type: 'photo',
        author_id: Random.rand(100) + 1,
      )
    when 3
      Blogpost.create(
        title: Faker::LeagueOfLegends.quote,
        description: Faker::StarWars.wookiee_sentence,
        content_type: 'photo',
        author_id: Random.rand(100) + 1,
      )
    when 4
      Blogpost.create(
        title: Faker::Hacker.noun,
        description: Faker::SiliconValley.quote,
        content_type: 'photo',
        author_id: Random.rand(100) + 1,
      )
    when 5
      Blogpost.create(
        title: Faker::Book.title,
        description: Faker::StarWars.quote,
        content_type: 'photo',
        author_id: Random.rand(100) + 1,
      )
    end
  when 5
    case seed_data
    when 1
      Blogpost.create(
        title: Faker::Coffee.blend_name,
        description: Faker::MostInterestingManInTheWorld.quote,
        content_type: 'video',
        author_id: Random.rand(100) + 1,
      )
    when 2
      Blogpost.create(
        title: Faker::Book.title,
        description: Faker::SiliconValley.motto,
        content_type: 'video',
        author_id: Random.rand(100) + 1,
      )
    when 3
      Blogpost.create(
        title: Faker::Superhero.descriptor,
        description: Faker::StarWars.wookiee_sentence,
        content_type: 'video',
        author_id: Random.rand(100) + 1,
      )
    when 4
      Blogpost.create(
        title: Faker::Coffee.notes,
        description: Faker::StarWars.quote,
        content_type: 'video',
        author_id: Random.rand(100) + 1,
      )
    when 5
      Blogpost.create(
        title: Faker::DrWho.quote,
        description: Faker::WorldOfWarcraft.quote,
        content_type: 'video',
        author_id: Random.rand(100) + 1,
      )
    end
  end

end

# 1000 times (Likes)
# Generate pairs of two numbers
# Push into an array if it's not in there
# Create Like
like_arr = []

5000.times do
  generated_arr = [Random.rand(100) + 1, Random.rand(1000) + 1]
  while like_arr.include?(generated_arr)
    generated_arr = [Random.rand(100) + 1, Random.rand(1000) + 1]
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

json.blogposts do
  @user_blogposts.each do |blogpost|
    json.set! blogpost.id do
      json.id blogpost.id
      json.title blogpost.title
      json.quote blogpost.quote
      json.quoteSource blogpost.quote_source
      json.description blogpost.description
      json.authorId blogpost.author_id
      json.contentType blogpost.content_type

      liker_arr = []
      blogpost.likers.each do |like|
        liker_arr.push(like.liker_id)
      end

      json.likerIds liker_arr

      if blogpost.seed_content == nil && blogpost.attached_file != nil
        json.attachedFile asset_path(blogpost.attached_file.url(:original))
      else
        json.attachedFile blogpost.seed_content
      end

    end
  end
end

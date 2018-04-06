json.blogposts do
  json.set! blogpost.id do
    json.id blogpost.id
    json.authorId blogpost.author_id
    json.contentType blogpost.content_type
    json.attachedFile asset_path(blogpost.attached_file.url(:original))
  end
end

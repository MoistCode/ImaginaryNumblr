class CreateBlogPosts < ActiveRecord::Migration[5.1]
  def change
    create_table :blog_posts do |t|
      t.integer :author_id, null: false
      t.string :content_type null: false
      t.string :title
      t.text :description
      t.string :quote
      t.timestamps
    end
  end
end

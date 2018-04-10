class CreateLikes < ActiveRecord::Migration[5.1]
  def change
    create_table :likes do |t|
      t.integer :liker_id
      t.integer :liked_blog_id
      t.timestamps
    end
    add_index :likes, :liker_id
    add_index :likes, :liked_blog_id
  end
end

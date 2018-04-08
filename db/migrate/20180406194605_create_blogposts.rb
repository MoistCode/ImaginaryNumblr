class CreateBlogposts < ActiveRecord::Migration[5.1]
  def change
    create_table :blogposts do |t|
      t.integer :author_id, null: false
      t.string :content_type, null: false
      t.string :title
      t.text :description
      t.string :quote
      t.timestamps
    end
    add_index :blogposts, :author_id
    add_index :blogposts, :id
  end
end

class AddColumnToBlogPosts < ActiveRecord::Migration[5.1]
  def change

    def self.up
      add_column :blog_posts, :attached_file
    end

    def self.down
      remove_column :blog_posts, :attached_file
    end

  end
end

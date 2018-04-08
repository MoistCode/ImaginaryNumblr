class AddColumnToBlogPosts < ActiveRecord::Migration[5.1]
  def change

    def self.up
      add_column :blogposts, :attached_file
    end

    def self.down
      remove_column :blogposts, :attached_file
    end

  end
end

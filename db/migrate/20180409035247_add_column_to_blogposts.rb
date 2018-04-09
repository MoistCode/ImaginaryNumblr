class AddColumnToBlogPosts < ActiveRecord::Migration[5.1]
  def change
    def self.up
      add_column :blogposts, :quote_source
    end

    def self.down
      remove_column :blogposts, :quote_source
    end

  end
end

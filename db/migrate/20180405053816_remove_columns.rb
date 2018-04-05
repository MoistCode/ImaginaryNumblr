class RemoveColumns < ActiveRecord::Migration[5.1]
  def change
    def self.up
      remove_column :users, :profile_picture_url
    end

    def self.down
      add_column :users, :profile_picture_url
    end
  end
end

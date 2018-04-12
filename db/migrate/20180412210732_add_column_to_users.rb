class AddColumnToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :seed_image, :string
  end
end

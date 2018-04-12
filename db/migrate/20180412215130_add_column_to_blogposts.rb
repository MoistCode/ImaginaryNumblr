class AddColumnToBlogposts < ActiveRecord::Migration[5.1]
  def change
    add_column :blogposts, :seed_content, :string
  end
end

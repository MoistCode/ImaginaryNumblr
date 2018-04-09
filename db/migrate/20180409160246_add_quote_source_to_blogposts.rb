class AddQuoteSourceToBlogposts < ActiveRecord::Migration[5.1]
  def change
    add_column :blogposts, :quote_source, :string
  end
end

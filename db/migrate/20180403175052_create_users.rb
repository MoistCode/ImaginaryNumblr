class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :username, null: false, unique: true
      t.string :password_digest, null: false
      t.string :session_token, null: false, unique: true
      t.string :email, null: false, unique: true
      t.string :profile_picture_url
      t.timestamps
    end
    add_index :users, :username
    add_index :users, :session_token
    add_index :users, :email
  end
end

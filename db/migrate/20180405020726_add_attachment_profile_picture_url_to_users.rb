class AddAttachmentProfilePictureUrlToUsers < ActiveRecord::Migration[5.1]
  def self.up
    change_table :users do |t|
      t.attachment :profile_picture_url
    end
  end

  def self.down
    remove_attachment :users, :profile_picture_url
  end
end

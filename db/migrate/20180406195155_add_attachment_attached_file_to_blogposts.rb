class AddAttachmentAttachedFileToBlogposts < ActiveRecord::Migration[5.1]
  def self.up
    change_table :blogposts do |t|
      t.attachment :attached_file
    end
  end

  def self.down
    remove_attachment :blogposts, :attached_file
  end
end

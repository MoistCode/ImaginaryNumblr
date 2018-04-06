class AddAttachmentAttachedFileToBlogposts < ActiveRecord::Migration[5.1]
  def self.up
    change_table :blog_posts do |t|
      t.attachment :attached_file
    end
  end

  def self.down
    remove_attachment :blog_posts, :attached_file
  end
end

# == Schema Information
#
# Table name: blog_posts
#
#  id                         :integer          not null, primary key
#  author_id                  :integer          not null
#  content_type               :string           not null
#  title                      :string
#  description                :text
#  quote                      :string
#  created_at                 :datetime         not null
#  updated_at                 :datetime         not null
#  attached_file_file_name    :string
#  attached_file_content_type :string
#  attached_file_file_size    :integer
#  attached_file_updated_at   :datetime
#

class BlogPost < ApplicationRecord
  validates :content_type, presence: true

  has_attached_file :attached_file, default_url: 'cow.com'
  validates_attachment_content_type :attached_file,
                                    content_type: /\Aimage\/.*\z/,
                                    message: 'only images'

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: 'User'

end

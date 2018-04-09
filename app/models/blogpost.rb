# == Schema Information
#
# Table name: blogposts
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
#  quote_source               :string
#

class Blogpost < ApplicationRecord
  validate :conditional_attached_file_validation

  validates :content_type, presence: true

  validates :title, length: { maximum: 36 }

  has_attached_file :attached_file
  validates_attachment_content_type :attached_file,
                                    content_type: [/\Aimage\/.*\Z/, /\Avideo\/.*\Z/, /\Aaudio\/.*\Z/],
                                    message: ['Format not supported']


  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: 'User',
    optional: true

  private

  def conditional_attached_file_validation
    if (( content_type != 'text' && content_type != 'quote') && attached_file.url == "/attached_files/original/missing.png")
      errors.add(:attached_file, "Must be present for type audio, photo, and video")
    end
  end

end

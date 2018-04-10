# == Schema Information
#
# Table name: likes
#
#  id            :integer          not null, primary key
#  liker_id      :integer
#  liked_blog_id :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Like < ApplicationRecord
  validates :liker_id, :liked_blog_id, presence: true

  belongs_to :liker,
    primary_key: :id,
    foreign_key: :liker_id,
    class_name: 'User'

  belongs_to :liked_blog,
    primary_key: :id,
    foreign_key: :liked_blog_id,
    class_name: 'Blogpost'
end

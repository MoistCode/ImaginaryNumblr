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
#

require 'test_helper'

class BlogPostTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

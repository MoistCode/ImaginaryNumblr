# == Schema Information
#
# Table name: users
#
#  id                               :integer          not null, primary key
#  username                         :string           not null
#  password_digest                  :string           not null
#  session_token                    :string           not null
#  email                            :string           not null
#  profile_picture_url              :string
#  created_at                       :datetime         not null
#  updated_at                       :datetime         not null
#  profile_picture_url_file_name    :string
#  profile_picture_url_content_type :string
#  profile_picture_url_file_size    :integer
#  profile_picture_url_updated_at   :datetime
#  seed_image                       :string
#

class User < ApplicationRecord

  attr_reader :password

  validates :password_digest, :session_token, :email, presence: true
  validates :username, presence: true, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  after_initialize :ensure_session_token

  has_attached_file :profile_picture_url, default_url: "default_user.png"
  validates_attachment_content_type :profile_picture_url, styles: { thumb: "100x100>" }, content_type: /\Aimage\/.*\z/

  has_many :blogposts,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: 'Blogpost',
    dependent: :destroy

  has_many :follows,
    primary_key: :id,
    foreign_key: :follower_id,
    class_name: 'Follow',
    dependent: :destroy

  has_many :followers,
    primary_key: :id,
    foreign_key: :followee_id,
    class_name: 'Follow',
    dependent: :destroy

  has_many :liked_blogs,
    primary_key: :id,
    foreign_key: :liker_id,
    class_name: 'Like',
    dependent: :destroy


  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user && user.is_password?(password)
    user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

end

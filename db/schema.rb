# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180412210732) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "blogposts", force: :cascade do |t|
    t.integer "author_id", null: false
    t.string "content_type", null: false
    t.string "title"
    t.text "description"
    t.string "quote"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "attached_file_file_name"
    t.string "attached_file_content_type"
    t.integer "attached_file_file_size"
    t.datetime "attached_file_updated_at"
    t.string "quote_source"
    t.index ["author_id"], name: "index_blogposts_on_author_id"
    t.index ["id"], name: "index_blogposts_on_id"
  end

  create_table "follows", force: :cascade do |t|
    t.integer "follower_id", null: false
    t.integer "followee_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["followee_id"], name: "index_follows_on_followee_id"
    t.index ["follower_id"], name: "index_follows_on_follower_id"
  end

  create_table "likes", force: :cascade do |t|
    t.integer "liker_id"
    t.integer "liked_blog_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["liked_blog_id"], name: "index_likes_on_liked_blog_id"
    t.index ["liker_id"], name: "index_likes_on_liker_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "email", null: false
    t.string "profile_picture_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "profile_picture_url_file_name"
    t.string "profile_picture_url_content_type"
    t.integer "profile_picture_url_file_size"
    t.datetime "profile_picture_url_updated_at"
    t.string "seed_image"
    t.index ["email"], name: "index_users_on_email"
    t.index ["session_token"], name: "index_users_on_session_token"
    t.index ["username"], name: "index_users_on_username"
  end

end

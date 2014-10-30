# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20141029174313) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "meals", force: true do |t|
    t.string   "brand"
    t.string   "name"
    t.integer  "calories"
    t.integer  "total_fat"
    t.integer  "saturated_fat"
    t.integer  "trans_fat"
    t.integer  "cholesterol"
    t.integer  "sodium"
    t.integer  "total_carbs"
    t.integer  "fiber"
    t.integer  "sugar"
    t.integer  "protein"
    t.integer  "vitamin_a"
    t.integer  "vitamin_c"
    t.integer  "calcium"
    t.integer  "iron"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "menu_id"
  end

  add_index "meals", ["menu_id"], name: "index_meals_on_menu_id", using: :btree

  create_table "menus", force: true do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "user_id"
  end

  add_index "menus", ["user_id"], name: "index_menus_on_user_id", using: :btree

  create_table "users", force: true do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "name"
    t.string   "email"
    t.string   "password_digest"
  end

end

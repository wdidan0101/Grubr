class AddUserRefAndMealRefToMenus < ActiveRecord::Migration
  def change
    add_reference :menus, :user, index: true
    add_reference :menus, :meal, index: true
  end
end

class RemoveMealRefFromMenus < ActiveRecord::Migration
  def change
  	remove_reference :menus, :meal
  end
end

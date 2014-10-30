class AddMenuRefToMeals < ActiveRecord::Migration
  def change
    add_reference :meals, :menu, index: true
  end
end

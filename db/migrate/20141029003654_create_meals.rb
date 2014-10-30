class CreateMeals < ActiveRecord::Migration
  def change
    create_table :meals do |t|
      t.string :brand
      t.string :name
      t.integer :calories
      t.integer :total_fat
      t.integer :saturated_fat
      t.integer :trans_fat
      t.integer :cholesterol
      t.integer :sodium
      t.integer :total_carbs
      t.integer :fiber
      t.integer :sugar
      t.integer :protein
      t.integer :vitamin_a
      t.integer :vitamin_c
      t.integer :calcium
      t.integer :iron

      t.timestamps
    end
  end
end

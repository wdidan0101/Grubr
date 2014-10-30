json.menus @menus.each do |menu|
  json.meals menu.meals do |meal|
  	json.brand meal.brand
	json.name meal.name
	json.calories meal.calories
	json.total_fat meal.total_fat
	json.saturated_fat meal.saturated_fat
	json.trans_fat meal.trans_fat
	json.cholesterol meal.cholesterol
	json.sodium meal.sodium
	json.total_carbs meal.total_carbs
	json.fiber meal.fiber
	json.sugar meal.sugar
	json.protein meal.protein
	json.vitamin_a meal.vitamin_a
	json.vitamin_c meal.vitamin_c
	json.calcium meal.calcium
	json.iron meal.iron
  end
end
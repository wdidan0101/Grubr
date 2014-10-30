
class MenusController < ApplicationController
  protect_from_forgery with: :exception, :except => :create
	
	def index
		@menus = current_user.menus
	end

	def create
		@menu = current_user.menus.create
		arr = menu_params #params[:menu]
		arr.each do |item|
			item
			meal = Meal.new(item)
			@menu.meals << meal
			meal.save
		end

		if @menu.save
			redirect_to root_path
		end
	end

	private
	  	def menu_params
	    	params.permit(:menu => [
				:brand,
				:name,
				:calories,
				:total_fat,
				:saturated_fat,
				:trans_fat,
				:cholesterol,
				:sodium,
				:total_carbs,
				:fiber,
				:sugar,
				:protein,
				:vitamin_a,
				:vitamin_c,
				:calcium,
				:iron
				]).require(:menu)
	  	end

end

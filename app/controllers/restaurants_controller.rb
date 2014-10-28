class RestaurantsController < ApplicationController
  
  def index
  	term = params[:term]
  	url = "https://api.nutritionix.com/v1_1/search/#{term}?results=0:50&fields=item_name,brand_name,item_id,nf_calories,nf_total_fat,nf_saturated_fat,nf_trans_fatty_acid,nf_cholesterol,nf_sodium,nf_total_carbohydrate,nf_dietary_fiber,nf_sugars,nf_protein,nf_vitamin_a_dv,nf_vitamin_c_dv,nf_calcium_dv,nf_iron_dv,nf_serving_size_qty,nf_serving_size_unit&appId=5f122b83&appKey=911595347512d4f3ad996f7317a355f2"
  	encoded_uri = URI.encode(url)
  	@response = HTTParty.get(encoded_uri)
  	@data = JSON.parse @response.body
  end

end

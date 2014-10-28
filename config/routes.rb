Rails.application.routes.draw do

	root 'application#index'
	# get '*path' => 'application#index'

  get '/search' => 'restaurants#index', as: :search
end

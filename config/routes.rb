Rails.application.routes.draw do

  root 'application#index'
  # get '*path' => 'application#index'

  ######### USER ROUTES ##########
  get 'users/new' => 'users#new', as: :signup
  post 'users/' => 'users#create'
  post 'users/' => 'users#update'

  get 'users/menus' => 'users#index'
  ###################################
  
  ######### SESSION ROUTES ##########
  get '/login' => 'sessions#index', as: :sessions
  post '/login' => 'sessions#create'  
  delete '/logout' =>'sessions#destroy', as: :log_out
  ###################################

   ######### RESTAURANT ROUTES ##########
    get '/search' => 'restaurants#index', as: :search
   ###################################

   post '/menus' => 'menus#create'
   get '/menus' => 'menus#index'

end

Rails.application.routes.draw do
  get '/planets' => 'planets#index'
  get '/planets/new' => 'planets#new', :as => 'new_planet'
  get '/planets/:id' => 'planets#show', :as => 'planet'
  post '/planets' => 'planets#create'
end

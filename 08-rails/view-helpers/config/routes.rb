Rails.application.routes.draw do
  root :to => 'pages#home'          # root_path

  get '/ogalo-numbers' => 'pages#numbers', :as => 'numbers' # numbers_path
  get '/text' => 'pages#text'       # text_path
  get '/assets' => 'pages#assets'   # assets_path
  get '/url' => 'pages#url'         # url_path

end

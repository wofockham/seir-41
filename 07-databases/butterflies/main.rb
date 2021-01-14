require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

# at least one route
get '/' do
  erb :home
end

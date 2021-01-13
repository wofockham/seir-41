require 'sinatra'
require 'sinatra/reloader'
require 'pry'

get '/' do # "root" or "home" page
  erb :home
end

get '/result' do
  @x = params[:x].to_f
  @y = params[:y].to_f

  @result = case params[:operator] # instance variable
  when '+' then @x + @y
  when '-' then @x - @y
  when '*' then @x * @y
  when '/' then @x / @y
  end

  erb :result
end

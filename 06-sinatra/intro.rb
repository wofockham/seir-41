require 'sinatra'
require 'sinatra/reloader' # from sinatra-contrib
require 'pry'

get '/hello' do
  "Hello world from Sinatra" # implicit return
end

get '/goodbye' do
  "Goodbye cruel world"
end

# Dynamic content
get '/lucky_number' do
  "Here is your lucky number: #{ rand 1..40 }"
end

get '/random_brother' do
  %w( Groucho Harpo Chico Zeppo Gummo ).sample
end

# Dynamic URLs
get '/fanclub/:member' do # /fanclub/ted
  "#{ params[:member].capitalize } is a proud member of the Marx Brothers fan club."
end

# Premium Membership
get '/fanclub/:first/:last' do # /fanclub/margaret/thatcher
  "#{ params[:first].capitalize } #{ params[:last].upcase } is a premium member of the Marx Brothers fan club."
end

# Platinum Membership
get '/fanclub/:first/:last/:favourite' do # /fanclub/pope/gregory/chico
  "#{ params[:first].capitalize } #{ params[:last].upcase } is a platinum member of the Marx Brother fan club and their favourite brother is #{ params[:favourite] }."
end

# Second crappiest calculator of the entire course.
get '/multiply/:x/:y' do
  result = params[:x].to_f * params[:y].to_f
  "The result is <strong>#{ result }</strong>"
end

# Serious complaints:
# Where is the HTML?
# How do we get information from the user without making them edit the URL?

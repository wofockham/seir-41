require 'httparty'
response = HTTParty.get 'http://numbersapi.com/random/trivia' # sync
puts response

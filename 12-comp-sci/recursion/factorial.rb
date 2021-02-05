# 5! = 5 * 4 * 3 * 2 * 1

require 'pry'

def factorial_iterative(n) # init
  result = 1
  while n > 1 # base case
    result *= n # mutation
    n -= 1 # mutation: moving towards the base case
  end

  result
end

def factorial_recursive(n) # init
  if n <= 1
    puts "base case reached"
    1 # base case
  else
    puts "recursing for: n #{ n-1 }"
    n * factorial_recursive(n-1) # recursion: moving towards the base case
  end
end

binding.pry

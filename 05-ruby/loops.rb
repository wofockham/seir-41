# Infinite loop - control-c
# while true
#   puts "wow"
# end

# initialize, conditional, UPDATE
# i = 0 # initialize
# while i < 5 # conditional
#   puts "i is now: #{ i }"
#   i += 1 # update
# end

# i = 0
# until i == 5 # conditional
#   puts "i is now: #{ i }"
#   i += 1 # update
# end

# Iterators: Ruby's preference for loops
# 5.times { }
# 5.times do |iteration|
#   puts "current iteration: #{ iteration }"
# end

# Backwards:
4.downto(0) do |n|
  puts n
end

# Greeting program to experiment with keyboard input and screen output.

puts "Welcome to this program." # console.log

print "What is your name? " # print() does not add a new line.
name = gets.chomp # Using chaining to read a string AND remove the new line.

puts "Thank you for entering your name, #{ name }."

print "What is your surname? "
surname = gets.chomp

puts "Your full name is #{ name } #{ surname.upcase }."

print "Where do you live? "
address = gets.chomp

puts "Your name is #{ name } #{ surname } and you live at #{ address }."

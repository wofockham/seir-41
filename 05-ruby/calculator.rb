def show_menu
  puts "Calculator" # TODO: You can use .center to make it look nice.
  puts "-=" * 40 # El cheapo horizontal dividing line
  puts "[a] - Addition"
  # TODO: Add other options here
  puts "[q] - Quit"
  print "Enter your choice: "
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
  case menu_choice
  when 'a'
    puts 'You chose addition!'    # TODO: Actually do the addition
    puts '(Addition coming soon)'
  else
    puts 'Invalid selection. You idiot.'
  end

  show_menu
  menu_choice = gets.chomp.downcase
end

puts "Thanks for using this crappy calculator!"

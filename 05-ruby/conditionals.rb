if 13 > 10
  puts "Yep, the number is bigger"
else
  puts "No the number is less than (or equal)"
end

grade = "D"
if grade == "A"
  puts "You are killing it"
elsif grade == "B"
  puts "You are coasting fine"
elsif grade == "C"
  puts "Adequate"
else
  puts "Please see me after class"
end

# Short conditionals with no else
puts "The number is bigger" if 13 > 10

# unless
today_is_wednesday = false
unless today_is_wednesday
  puts "It's not Wednesday"
end

puts "It's not Wednesay" if !today_is_wednesday
puts "It's not Wednesday" unless today_is_wednesday

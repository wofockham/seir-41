Planet.destroy_all # Galactus

Planet.create :name => 'Earth', :orbit => 365.25, :moons => 1
Planet.create :name => 'Venus', :orbit => 243, :moons => 0
Planet.create :name => 'Mars', :orbit => 687, :moons => 2

puts "#{ Planet.count } planets available."

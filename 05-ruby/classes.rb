require 'pry'

# A class is kind of like a hash -- it has key/value pairs.
# BUT: you have to predefine the keys.
# A strict hash -- you have to predefine the shape.
# ALSO: unlike a Ruby hash, an object can have methods (function inside it).

class Actor
  def award_speech
    "I would like to thank my agent and my parents. We did it baby."
  end

  def deny_allegations
    "I deny that and I was drunk and I don't remember and he's not my type."
  end
end

class Stooge < Actor
  def terrible?
    true
  end
end

class MarxBrother < Actor # Inheritance
  attr_accessor :name, :instrument, :vice

  # constructor
  def initialize(n='', i='', v='mocking authority')
    @name = n
    @instrument = i
    @vice = v
  end

  def play()
    "My name is #{ @name } and I play #{ @instrument }."
  end
end

groucho = MarxBrother.new 'Groucho', 'guitar', 'cigars' # instantiating the object

# Setting up a Marx Brother is a bit annoying.

harpo = MarxBrother.new
harpo.name = 'Harpo'
harpo.instrument = 'harp'
harpo.vice = 'mutism'

binding.pry

class AutoController < ApplicationController
  def color
    # raise "hell" # binding.pry in the browser
    render :color
  end

  def engine
    render :engine
  end
end

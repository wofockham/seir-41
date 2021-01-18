class PagesController < ApplicationController
  def hello
    render :hello # equivalent to: erb :hello
  end

  def goodbye
    render :goodbye
  end

  def funny
    render :funny
  end
end

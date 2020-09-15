class PagesController < ApplicationController
  # get request for home page
  def home
    @basic_plan = Plan.find(1)
    @pro_plan = Plan.find(2)
  end
  
    # get request for about page

  def about
  end
end
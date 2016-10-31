class WelcomeController < ApplicationController

  def v1
    @todos = Todo.all
  end

  def v2
    @todos = Todo.all
  end

  def v3
    @todos = Todo.all
  end

end

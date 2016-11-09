Rails.application.routes.draw do

  resources :messages
  mount ActionCable.server => "/cable"

  get "/todos/v1" => "welcome#v1"
  get "/todos/v2" => "welcome#v2"
  get "/todos/v3" => "welcome#v3"

  get "/todos/v4" => "welcome#v4"

  resources :todos
  resources :people

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "welcome#chat"

end

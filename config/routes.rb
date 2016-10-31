Rails.application.routes.draw do

  get "/todos/v1" => "welcome#v1"
  get "/todos/v2" => "welcome#v2"
  get "/todos/v3" => "welcome#v3"

  resources :todos
  resources :people

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "people#index"

end

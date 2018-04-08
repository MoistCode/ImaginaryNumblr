Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
  end

  resources :blogposts, defaults: { format: :json }, only: [:index, :show, :create, :edit, :update, :destrou]

  root 'static_pages#root'
end

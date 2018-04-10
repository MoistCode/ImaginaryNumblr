Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :create, :show]
    resource :session, only: [:create, :destroy]
  end

  resources :blogposts,
            defaults: { format: :json },
            only: [:index, :show, :create, :update, :destroy]

  resources :follows,
             defaults: { format: :json },
             only: [:create, :destroy]

  root 'static_pages#root'
end

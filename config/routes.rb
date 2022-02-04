Rails.application.routes.draw do
  root 'pages#index'

  namespace :api do
    namespace :v1 do
      resources :recipes, params: :slug
      resources :comments, only: [:create, :destroy]
      # resources :ingredients
    end
  end

  get '*path', to: 'pages#index', via: :all
end

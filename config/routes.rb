Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root to: "static_pages#root"
  
  namespace :api, defaults: {format: :json} do
    resources :users
    resources :servers do
      resources :channels, except: [:show, :destroy]
    end
    resources :channels, only: [:show, :destroy]
    resource :session, only: [:create, :destroy]
  end
end

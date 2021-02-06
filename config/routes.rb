Rails.application.routes.draw do

  scope :api do
    resources :people
    resources :users
    resources :products
    resources :movements
    resources :invoices
    resources :invoice_items
    resources :organizations
    resources :products
    resources :tags
    # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  end
  scope path: 'api' do
    api_guard_routes for: 'users', controller: {
        authentication: 'users/authentication'
    }
  end
  mount_ember_app :frontend, to: "/"
end
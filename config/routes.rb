Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root "pages#index"

  namespace :api  do
    namespace :v1 do

      namespace :auth do
        get '/me', to: "tests#get"
      end
    end
  end

  match '*unmatched_route', :to => "pages#index", :via => :all
end

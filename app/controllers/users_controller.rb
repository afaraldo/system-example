class UsersController < ApplicationController
  resource :user
  respond_to :json
end

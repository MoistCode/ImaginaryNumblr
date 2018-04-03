class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_methods :current_user, :logged_in?
end

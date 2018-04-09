class Api::UsersController < ApplicationController

  def show
    @user = User.find(params[:id])

    if @user
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(
      :username,
      :password,
      :email,
      :profile_picture_url
    )
  end

  private

  def not_found
    raise ActionController::RoutingError.new('Not Found')
  end

end

class FollowsController < ApplicationController
  def create
    if !current_user
      render json: ['Must be logged in to do that.'], status: 422
    elsif User.find(params[:follow][:followee_id])
        @follow = Follow.new(followee_id: params[:follow][:followee_id])
        @follow.follower_id = current_user.id
        if @follow.save
          @users = [User.find(current_user.id), User.find(params[:follow][:followee_id])]
          render 'api/users/index'
        else
          render json: @follow.errors.full_messages, status: 422
        end
    else
      render json: ['That user does not exist.'], status: 422
    end
  end

  def destroy
    @follow = Follow.find_by(follower_id: current_user.id, followee_id: params[:id])
    @follow.destroy
    @users = [current_user, User.find(params[:id])]
    render 'api/users/index'
  end

  private

  def follow_params
    params.require(:follow).permit(:followee_id);
  end
end

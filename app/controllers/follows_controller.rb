class FollowsController < ApplicationController
  def create
    if !current_user
      render json: ['Must be logged in to do that.'], status: 422
    elsif User.find(params[:follow][:followee_id])
        @follow = Follow.new(followee_id: params[:follow][:followee_id])
        @follow.follower_id = current_user.id
        if @follow.save
          @user = User.find(current_user.id)
          render 'api/users/show'
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
    @user = current_user
    render 'api/users/show'
  end

  private

  def follow_params
    params.require(:follow).permit(:followee_id);
  end
end

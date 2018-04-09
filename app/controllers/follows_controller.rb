class FollowsController < ApplicationController
  def create
    if User.find(params[:follow][:followee_id])
      @follow = Follow.new(follow_params)
      @follow.follower_id = current_user.id
      if @follow.save
        # Do something
      else
        render json: @follow.errors.full_messages, status: 422
      end
    else
      render json: ['That user does not exist.'], status: 422
    end
  end

  def destroy

  end

  private

  def follow_params
    params.require(:follow).permit(:followee_id);
  end
end

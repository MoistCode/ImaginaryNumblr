class LikesController < ApplicationController

  def create
    if !current_user
      render json: ['Must be logged in to do that.'], status: 422
    elsif Blogpost.find(params[:like][:liked_blog_id])
      @like = Like.new(liked_blog_id: params[:like][:liked_blog_id])
      @like.liker_id = current_user.id
      if Like.find_by(liker_id: current_user.id, liked_blog_id: @like.liked_blog_id)
        render json: ['Cannot like a blog twice'], status: 422
      elsif @like.save
        @user = User.find(current_user.id)
        render 'api/users/show'
      else
        render json: @like.errors.full_messages, status: 422
      end
    else
      render json: ['That blog does not exist.'], status: 422
    end
  end

  def destroy
    @like = Like.find_by(liker_id: current_user.id, liked_blog_id: params[:id])
    @like.destroy
    @user = current_user
    render 'api/users/show'
  end

  private

  def like_params
    params.require(:like).permit(:liked_blog_id)
  end

end

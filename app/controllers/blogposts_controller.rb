class BlogpostsController < ApplicationController

  def index
    @user_blogposts = []
    if params[:blogpost]
      params[:blogpost][:blogpostIds].each do |blogpostId|
        @user_blogposts << Blogpost.find(blogpostId.to_i)
      end
      render 'blogposts/index'
    else
      render status: 422
    end
  end

  def show
    @blogpost = Blogpost.find(params[:id])

    if @blogpost
      render 'blogposts/show'
    else
      render json: @blogpost.errors.full_messages, status: 422
    end
  end

  def create
    @blogpost = Blogpost.new(blogpost_params)

    @blogpost.author_id = current_user.id

    if @blogpost.save
      render 'blogposts/show'
    else
      render json: @blogpost.errors.full_messages, status: 422
    end
  end

  def update
    @blogpost = current_user.blogposts.find(params[:blogpost][:id])

    if @blogpost.update(blogpost_params)
      render 'blogposts/show'
    else
      render json: @blogpost.errors.full_messages, status: 422
    end
  end

  def destroy
    @blogpost = current_user.blogposts.find(params[:id])

    if @blogpost.destroy
      @user = current_user
      render 'api/users/show'
    else
      render json: ['Cannot do such thing!'], status: 404
    end
  end

  private

  def blogpost_params
    params.require(:blogpost).permit(
      :content_type,
      :title,
      :description,
      :attached_file,
      :quote,
      :blogpostIds,
      :quote_source
    )
  end

end

class BlogpostsController < ApplicationController

  def index
    if !params[:blogpost][:blogpostIds]
      render json: ['Nothing to see here'], status: 404
    else
      @user_blogposts = []
      params[:blogpost][:blogpostIds].each do |blogpostId|
        @user_blogposts << Blogpost.find(blogpostId.to_i)
      end
      render 'blogposts/index'
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

  def edit
    @blogpost = current_user.blogposts.find(params[:id])

    if @blogpost.author_id == current_user.id
      render 'blogposts/show'
    else
      render json: ['Blog does not exist.'], status: 404
    end
  end

  def update
    @blogpost = current_user.blogposts.find(params[:blogpost][:id])

    if @blogpost.update(blogpost_params)
      debugger;
      render 'blogposts/show'
    else
      render json: @blogpost.errors.full_messages, status: 422
    end
  end

  def destroy
    blogpost = current_user.blogposts.find(params[:id])

    if blogpost.destroy
      render json: ['Deletion completed']
    else
      render json: blogpost.errors.full_messages, status: 404
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
      :blogpostIds
    )
  end

end

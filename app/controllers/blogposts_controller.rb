class BlogpostsController < ApplicationController

  def index
    debugger
    if !params[:blogpostIds]
      render json: ['Nothing to see here']
    else
      @user_blogposts = []
      params[:blogpostIds].each do |blogpostId|
        @user_blogposts << Blogpost.find(blogpostId)
      end
      render json: @user_blogposts
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
    @blogpost = Blogpost.find(params[:id])

    if @blogpost.author_id == current_user.id
      render 'blogposts/show'
    else
      render json: ['Cannot edit blog.'], status: 404
    end
  end

  def update
    @blogpost = current_user.blogposts.find(params[:id])

    if @blogpost.update_attributes(blogpost_params)
      render 'blogposts/show'
    else
      render json: @blogpost.errors.full_messages, status: 422
    end
  end

  def destroy
    blogpost = current_user.blogposts.find(params[:id])

    if blogpost.destroy
      # Send the user back to their dashboard
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

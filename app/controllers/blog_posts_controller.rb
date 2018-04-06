class BlogPostsController < ApplicationController

  def index

  end

  def show
    @blogpost = BlogPost.find(params[:id])

    if @blogpost
      render 'blogposts/show'
    else
      render json: @blogpost.errors.full_messages, status: 422
    end
  end

  def create
    @blogpost = BlogPost.new(blogpost_params)
    @blogpost.author_id = current_user.id

    if @blogpost.save
      render 'blogposts/show'
    else
      render json: @blogpost.errors.full_messages, status: 422
    end
  end

  def edit
    @blogpost = BlogPost.find(params[:id])

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
    params.require(:blogposts).permit(
      :author_id,
      :content_type,
      :title,
      :description,
      :quote,
      :attached_file
    )
  end

end

module Api
    module V1
        class CommentsController < ApplicationController
            protect_from_forgery with: :null_session

            def create
                comment = recipe.comments.new(comment_params)

                if comment.save
                    render json: CommentSerializer.new(comment).serialized_json
                else
                    render json: { error: comment.errors.messages }, status: 422
                end
            end

            def destroy
                comment = Comment.find(params[:id])

                if comment.destroy
                    head :no_content
                else
                    render json: { error: comment.errors.messages }, status: 422
                end
            end

            private
            def recipe
                @recipe ||= Recipe.find(params[:recipe_id])
            end

            def comment_params
                params.require(:comment).permit(:title, :body, :author, :recipe_id)
            end
        end
    end
end
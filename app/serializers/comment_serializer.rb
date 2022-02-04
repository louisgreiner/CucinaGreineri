class CommentSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :body, :author, :recipe_id
end

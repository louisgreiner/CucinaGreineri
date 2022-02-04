class RecipeSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :author, :preparation_time, :cooking_time, :image_url, :ingredients, :quantities, :steps, :slug, :comments
end

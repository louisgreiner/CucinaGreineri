class IngredientsRecipeSerializer
  include FastJsonapi::ObjectSerializer
  attributes :recipe_id, :ingredient_id, :quantity
end

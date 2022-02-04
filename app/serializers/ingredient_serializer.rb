class IngredientSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :image_url, :unit_id
end

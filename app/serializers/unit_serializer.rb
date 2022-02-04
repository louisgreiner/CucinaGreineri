class UnitSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :abbreviation, :image_url
end

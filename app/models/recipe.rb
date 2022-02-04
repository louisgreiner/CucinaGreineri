class Recipe < ApplicationRecord
    has_many :comments
    has_and_belongs_to_many :ingredients

    before_create :slugify

    def slugify
        self.slug = name.parameterize
    end

    def quantities
        quantities = []
        raw = IngredientsRecipe.where(recipe_id: id)
        raw.each do |r|
            quantities.push(r.quantity)
        end
        return quantities
    end
    
end

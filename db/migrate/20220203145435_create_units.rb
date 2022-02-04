class CreateUnits < ActiveRecord::Migration[6.1]
  def change
    create_table :units do |t|
      t.string :name
      t.string :abbreviation
      t.string :image_url

      t.timestamps
    end
  end
end

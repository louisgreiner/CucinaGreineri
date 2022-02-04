class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.string :title
      t.string :body
      t.string :author
      t.belongs_to :recipe, null: false, foreign_key: true

      t.timestamps
    end
  end
end

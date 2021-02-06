class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :code, null: false
      t.string :name, null: false
      t.integer :price
      t.timestamp :deleted_at

      t.timestamps
    end
  end
end

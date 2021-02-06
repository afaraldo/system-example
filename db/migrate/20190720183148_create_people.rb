class CreatePeople < ActiveRecord::Migration[5.2]
  def change
    create_table :people do |t|
      t.string :document_number, index: { unique: true }, null: false
      t.string :name, null: false
      t.string :lastname, null: true
      t.date :born_date, null: true

      t.timestamp :deleted_at # soft deleted
      t.timestamps
    end
  end
end

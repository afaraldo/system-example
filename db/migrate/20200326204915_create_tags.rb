class CreateTags < ActiveRecord::Migration[5.2]
  def change
    create_table :tags do |t|
      t.string :name

      t.timestamps
    end

    create_table :invoices_tags, id: false do |t|
      t.belongs_to :invoice
      t.belongs_to :tag
    end
  end
end

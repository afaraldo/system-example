class CreateInvoiceItems < ActiveRecord::Migration[5.2]
  def change
    create_table :invoice_items do |t|
      t.references :invoice, foreign_key: true
      t.string :description, null: false
      t.integer :quantity, null: false
      t.integer :iva0
      t.integer :iva5
      t.integer :iva10
      t.datetime :deleted_at, null: true

      t.timestamps
    end
  end
end

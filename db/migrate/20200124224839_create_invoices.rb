class CreateInvoices < ActiveRecord::Migration[5.2]
  def change
    create_table :invoices do |t|
      t.datetime :date, null: false
      t.string :name, null: false
      t.string :ruc, null: false
      t.string :stamping_number, null: false
      t.datetime :stamping_expiry
      t.string :number, null: false
      t.boolean :condition, null: false
      t.datetime :invoice_expiry
      t.integer :total, null: false
      t.integer :total_iva, null: false
      t.string :type
      t.references :person, foreign_key: true
      t.datetime :deleted_at, null: true

      t.timestamps
    end
  end
end

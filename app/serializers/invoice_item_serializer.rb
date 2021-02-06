class InvoiceItemSerializer < ActiveModel::Serializer
  attributes :id, :description, :quantity, :iva0, :iva5, :iva10
  has_one :invoice, foreign_key_on: :invoice_id
end

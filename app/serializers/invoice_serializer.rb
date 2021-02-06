class InvoiceSerializer < ActiveModel::Serializer
  attributes :id, :date, :name, :stamping_number, :invoice_expiry, :stamping_expiry, :number, :condition, :total, :ruc, :total_iva
  type :invoice
  has_one :person
  has_many :items
  has_many :tags
end

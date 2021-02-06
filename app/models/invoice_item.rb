class InvoiceItem < ApplicationRecord
  acts_as_paranoid
  belongs_to :invoice, foreign_key: :invoice_id
  validates :description, :quantity, presence: true
end

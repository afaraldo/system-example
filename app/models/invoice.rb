class Invoice < ApplicationRecord
  include PgSearch
  acts_as_paranoid

  pg_search_scope :search_for, against: [:name, :number], using: { tsearch: { any_word: true, prefix: true} }

  belongs_to :person, autosave: true
  has_many :items, class_name: 'InvoiceItem', dependent: :destroy
  has_and_belongs_to_many :tags, optional: true

  validates :date, :name, :ruc, :number, :total, presence: true
  validates :number, uniqueness: { scope: :stamping_number }
  validates :tags, presence: false
end

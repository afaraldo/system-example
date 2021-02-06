class Movement < ApplicationRecord
  include PgSearch

  pg_search_scope :search_for, against: %i(description), using: { tsearch: { prefix: true } }

  validates :description, :date, :amount, presence: true

end

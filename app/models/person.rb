class Person < ApplicationRecord
  validates :name, presence: true
  validates :document_number, presence: true, uniqueness: true
end

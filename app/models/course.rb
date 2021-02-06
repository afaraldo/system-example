class Course < ApplicationRecord

  has_many :registrations
  has_many :concepts, class_name: 'CourseConcept'

  validates :name, :start_date,  presence: true
  validates :name, uniqueness: true
end

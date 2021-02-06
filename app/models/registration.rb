class Registration < ApplicationRecord
  auto_increment :number, before: :validation

  belongs_to :course
  belongs_to :student, class_name: 'Person'

  validates :date, presence: true
  validates :number, presence: true
  validates :student_name, presence: true
  validates :student_lastname, presence: true
  validates :student_document_number, presence: true
  validates :student_born_date, presence: true

end

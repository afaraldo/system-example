class CourseSerializer < ActiveModel::Serializer
  attributes :id, :name, :start_date, :end_date, :concepts
  has_many :registrations
  has_many :concepts
end

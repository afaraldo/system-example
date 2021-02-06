class CourseConceptSerializer < ActiveModel::Serializer
  attributes :id, :price, :expiry_date
  has_one :course
  has_one :product
end

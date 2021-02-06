class MovementSerializer < ActiveModel::Serializer
  attributes :id, :date, :amount, :description, :is_income
end

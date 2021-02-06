class PersonSerializer < ActiveModel::Serializer
  attributes :id, :name, :lastname, :document_number, :born_date
end

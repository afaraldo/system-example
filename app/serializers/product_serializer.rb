class ProductSerializer < ActiveModel::Serializer
  attributes :id, :code, :name, :price
end

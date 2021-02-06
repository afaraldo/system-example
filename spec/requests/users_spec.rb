require 'rails_helper'

RSpec.describe "Users", type: :request do
  let(:sample ) { create(:user) }

  it_behaves_like "GET index" do
    let(:valid_route) { "/api/users" }
  end

  it_behaves_like "GET show" do
    let(:valid_route) { "/api/users/#{sample.id}" }
    let(:failed_route) { "/api/users/0" }
  end

  it_behaves_like "DELETE destroy"  do
    let(:valid_route) { "/api/users/#{sample.id}" }
    let(:invalid_route) { "/api/users/0" }
  end

  it_behaves_like "POST create"  do
    let(:valid_route) { "/api/users" }
    let(:params) { ActiveModelSerializers::Adapter.create( UserSerializer.new(build(:user)) ).as_json }
    let(:invalid_params) do
      model = build(:user)
      model.email = nil
      serializer = UserSerializer.new( model )
      serialization = ActiveModelSerializers::Adapter.create( serializer )
      serialization.as_json
    end
  end

  it_behaves_like "PUT update"  do
    let(:valid_route) { "/api/users/#{sample.id}" }
    let(:params) do
      model = sample
      model.email = "XX"
      serializer = UserSerializer.new( model )
      serialization = ActiveModelSerializers::Adapter.create( serializer )
      serialization.as_json
    end
    let(:invalid_params) do
      model = build(:user)
      model.email = nil
      serializer = UserSerializer.new( model )
      serialization = ActiveModelSerializers::Adapter.create( serializer )
      serialization.as_json
    end
  end
end

require 'rails_helper'

RSpec.describe "People", type: :request do
  let(:sample ) { create(:person) }

  it_behaves_like "GET index" do
    let(:valid_route) { "/api/people" }
  end

  it_behaves_like "GET show" do
    let(:valid_route) { "/api/people/#{sample.id}" }
    let(:failed_route) { "/api/people/0" }
  end

  it_behaves_like "DELETE destroy"  do
    let(:valid_route) { "/api/people/#{sample.id}" }
    let(:invalid_route) { "/api/people/0" }
  end

  it_behaves_like "POST create"  do
    let(:valid_route) { "/api/people" }
    let(:params) { ActiveModelSerializers::Adapter.create( PersonSerializer.new(build(:person)) ).as_json }
    let(:invalid_params) do
      model = build(:person)
      model.document_number = nil
      serializer = PersonSerializer.new( model )
      serialization = ActiveModelSerializers::Adapter.create( serializer )
      serialization.as_json
    end
  end

  it_behaves_like "PUT update"  do
    let(:valid_route) { "/api/people/#{sample.id}" }
    let(:params) do
      model = sample
      model.document_number = "XX"
      serializer = PersonSerializer.new( model )
      serialization = ActiveModelSerializers::Adapter.create( serializer )
      serialization.as_json
    end
    let(:invalid_params) do
      model = build(:person)
      model.document_number = nil
      serializer = PersonSerializer.new( model )
      serialization = ActiveModelSerializers::Adapter.create( serializer )
      serialization.as_json
    end
  end
end

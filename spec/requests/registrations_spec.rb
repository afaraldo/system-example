require 'rails_helper'

RSpec.describe "Registrations", type: :request do
  let(:sample ) { create(:registration) }

  it_behaves_like "GET index" do
    let(:valid_route) { "/api/registrations" }
  end

  it_behaves_like "GET show" do
    let(:valid_route) { "/api/registrations/#{sample.id}" }
    let(:failed_route) { "/api/registrations/0" }
  end

  it_behaves_like "DELETE destroy"  do
    let(:valid_route) { "/api/registrations/#{sample.id}" }
    let(:invalid_route) { "/api/registrations/0" }
  end

  it_behaves_like "POST create"  do
    let(:valid_route) { "/api/registrations" }
    let(:params) do
      model = build(:registration)
      model.course_id = create(:course).id
      serializer = RegistrationSerializer.new( model )
      ActiveModelSerializers::Adapter.create( serializer ).as_json
    end
    let(:invalid_params) do
      model = build(:registration)
      model.date = nil
      serializer = RegistrationSerializer.new( model )
      serialization = ActiveModelSerializers::Adapter.create( serializer )
      serialization.as_json
    end
  end

  it_behaves_like "PUT update"  do
    let(:valid_route) { "/api/registrations/#{sample.id}" }
    let(:params) do
      model = sample
      model.date = Date.today
      serializer = RegistrationSerializer.new( model )
      serialization = ActiveModelSerializers::Adapter.create( serializer )
      serialization.as_json
    end
    let(:invalid_params) do
      model = build(:registration)
      model.date = nil
      serializer = RegistrationSerializer.new( model )
      serialization = ActiveModelSerializers::Adapter.create( serializer )
      serialization.as_json
    end
  end
end

require 'rails_helper'

RSpec.describe "Courses", type: :request do
  let(:sample ) { create(:course) }

  it_behaves_like "GET index" do
    let(:valid_route) { "/api/courses" }
  end

  it_behaves_like "GET show" do
    let(:valid_route) { "/api/courses/#{sample.id}" }
    let(:failed_route) { "/api/courses/0" }
  end

  it_behaves_like "DELETE destroy"  do
    let(:valid_route) { "/api/courses/#{sample.id}" }
    let(:invalid_route) { "/api/courses/0" }
  end

  it_behaves_like "POST create"  do
    let(:valid_route) { "/api/courses" }
    let(:params) { ActiveModelSerializers::Adapter.create( CourseSerializer.new(build(:course)) ).as_json }
    let(:invalid_params) do
      model = build(:course)
      model.name = nil
      serializer = CourseSerializer.new( model )
      serialization = ActiveModelSerializers::Adapter.create( serializer )
      serialization.as_json
    end
  end

  it_behaves_like "PUT update"  do
    let(:valid_route) { "/api/courses/#{sample.id}" }
    let(:params) do
      model = sample
      model.name = "XX"
      serializer = CourseSerializer.new( model )
      serialization = ActiveModelSerializers::Adapter.create( serializer )
      serialization.as_json
    end
    let(:invalid_params) do
      model = build(:course)
      model.name = nil
      serializer = CourseSerializer.new( model )
      serialization = ActiveModelSerializers::Adapter.create( serializer )
      serialization.as_json
    end
  end
end

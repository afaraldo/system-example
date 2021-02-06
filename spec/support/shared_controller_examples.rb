RSpec.shared_examples "GET index" do
  before { get valid_route, headers: authenticated_header }
  it "success" do
    expect(response).to have_http_status(:success)
  end
  it "response is a JSON" do
    expect(response.content_type).to eq "application/vnd.api+json"
  end
end

RSpec.shared_examples "GET show" do
  before { get valid_route, headers: authenticated_header }
  it "success" do
    expect(response).to have_http_status(:success)
  end
  it "response is a JSON" do
    expect(response.content_type).to eq "application/vnd.api+json"
  end
  it "don't found register" do
    get failed_route, headers: authenticated_header
    expect(response).to have_http_status(:not_found)
  end
end

RSpec.shared_examples "DELETE destroy" do
  before { delete valid_route, headers: authenticated_header }
  it "success" do
    expect(response).to have_http_status(:success)
  end
  it "response is a JSON" do
    expect(response.content_type).to eq "application/vnd.api+json"
  end
  it "don't found register" do
    delete invalid_route, headers: authenticated_header
    expect(response).to have_http_status(:not_found)
  end
end

RSpec.shared_examples "POST create" do
  before { post valid_route, params: params, headers: authenticated_header }
  it "success" do
    expect(response).to have_http_status(:success)
  end
  it "response is a JSON" do
    expect(response.content_type).to eq "application/vnd.api+json"
  end
  it "failure" do
    post valid_route, params: invalid_params, headers: authenticated_header
    expect(response).to have_http_status(:unprocessable_entity)
  end
end

RSpec.shared_examples "PUT update" do
  before { put valid_route, params: params, headers: authenticated_header }
  it "success" do
    expect(response).to have_http_status(:success)
  end
  it "response is a JSON" do
    expect(response.content_type).to eq "application/vnd.api+json"
  end
  it "failure" do
    put valid_route, params: invalid_params, headers: authenticated_header
    expect(response).to have_http_status(:unprocessable_entity)
  end
end
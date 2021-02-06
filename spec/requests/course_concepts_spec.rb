require 'rails_helper'

RSpec.describe "CourseConcepts", type: :request do
  describe "GET /course_concepts" do
    it "works! (now write some real specs)" do
      get course_concepts_path
      expect(response).to have_http_status(200)
    end
  end
end

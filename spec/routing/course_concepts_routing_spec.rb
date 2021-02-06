require "rails_helper"

RSpec.describe CourseConceptsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(:get => "/course_concepts").to route_to("course_concepts#index")
    end

    it "routes to #show" do
      expect(:get => "/course_concepts/1").to route_to("course_concepts#show", :id => "1")
    end


    it "routes to #create" do
      expect(:post => "/course_concepts").to route_to("course_concepts#create")
    end

    it "routes to #update via PUT" do
      expect(:put => "/course_concepts/1").to route_to("course_concepts#update", :id => "1")
    end

    it "routes to #update via PATCH" do
      expect(:patch => "/course_concepts/1").to route_to("course_concepts#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/course_concepts/1").to route_to("course_concepts#destroy", :id => "1")
    end
  end
end

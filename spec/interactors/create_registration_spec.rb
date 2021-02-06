require './spec/rails_helper'

RSpec.describe CreateRegistration, type: :interactor do

  subject(:context) {
    course = create(:course)
    params = {date: "2019-01-01", student_name: "Hola", student_lastname: "Hola", student_born_date:"2009-01-01",
              student_document_number: "1234567", course_id: course.id}
    CreateRegistration.call(params)
  }

  describe '.call' do
    context "when create new registration" do
      it "succeeds" do
        expect(context).to be_a_success
      end

      it "failed" do
        context = CreateRegistration.call()
        expect(context).to be_a_failure
      end
    end
  end
end

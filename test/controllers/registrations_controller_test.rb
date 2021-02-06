require 'test_helper'

class RegistrationsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @registration = registrations(:one)
  end

  test "should get index" do
    get registrations_url, as: :json
    assert_response :success
  end

  test "should create registration" do
    #assert_difference('Registration.count') do
      post registrations_url, params: {"data":{"attributes":{"date":"2019-11-07T04:07:32.932Z","student_name":"a","student_lastname":"a","student_born_date":"2019-11-18T03:00:00.000Z","student_nationality":nil,"student_document_number":"a","student_blood_type":nil,"student_graduated_from":nil,"student_graduated_year":nil,"student_address":nil,"student_cellphone":nil,"student_notes":nil,"tutor_name":nil,"tutor_lastname":nil,"tutor_address":nil,"tutor_cellphone":nil,"tutor_workplace":nil,"tutor_notes":nil},"relationships":{"course":{"data":{"type":"courses","id":@registration.course.id}}},"type":"registrations"}}, as: :json
      assert_response 201
    #end
  end

  test "should show registration" do
    get registration_url(@registration), as: :json
    assert_response :success
  end

  test "should update registration" do
    patch registration_url(@registration), params: { registration: { course_id: @registration.course_id, date: @registration.date, student_id: @registration.student_id } }, as: :json
    assert_response 200
  end

  test "should destroy registration" do
    assert_difference('Registration.count', -1) do
      delete registration_url(@registration), as: :json
    end

    assert_response 204
  end
end

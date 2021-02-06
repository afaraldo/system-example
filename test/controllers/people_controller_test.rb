require 'test_helper'

class PeopleControllerTest < ActionDispatch::IntegrationTest
  setup do
    @person = people(:one)
  end

  test "should get index" do
    get people_url, headers: authenticated_header, as: :json
    assert_response :success
  end

  test "should create person" do
    assert_difference('Person.count') do
      post people_url, headers: authenticated_header, params: { person: { born_date: @person.born_date, lastname: @person.lastname, name: @person.name, document_number: 12345 } }, as: :json
    end

    assert_response 201
  end

  test "should not create person and return a error" do
    assert_no_difference('Person.count') do
      post people_url, headers: authenticated_header, params: { person: { born_date: @person.born_date, lastname: @person.lastname, name: nil } }, as: :json
    end

    assert_response 422
  end

  test "should show person" do
    get person_url(@person), headers: authenticated_header, as: :json
    assert_response :success
  end

  test "should update person" do
    patch person_url(@person), headers: authenticated_header, params: { person: { born_date: @person.born_date, lastname: @person.lastname, name: @person.name } }, as: :json
    assert_response 200
  end

  test "should not update person and return a error" do
    patch person_url(@person), headers: authenticated_header, params: { person: { born_date: @person.born_date, lastname: @person.lastname, name: nil } }, as: :json

    assert_response 422
  end

  test "should destroy person" do
    assert_difference('Person.count', -1) do
      delete person_url(@person), headers: authenticated_header, as: :json
    end

    assert_response 204
  end
end

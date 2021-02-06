require 'test_helper'

class UsersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @user = users(:one)
  end

  test "should get index" do
    get users_url, as: :json
    assert_response :success
  end

  test "should create user" do
    assert_difference('User.count') do
      post users_url, headers: authenticated_header, params: { user: { email: "example@email.com", password: "12345678" } }, as: :json
    end

    assert_response 201
  end

  test "should not create user and return a error" do
    assert_no_difference('Person.count') do
      post users_url, headers: authenticated_header, params: { user: { email: nil, password: @user.password_digest } }, as: :json
    end

    assert_response 422
  end

  test "should show user" do
    get user_url(@user), as: :json
    assert_response :success
  end

  test "should update user" do
    patch user_url(@user), params: { user: { email: @user.email, password_digest: @user.password_digest } }, as: :json
    assert_response 200
  end

  test "should not update user and return a error" do
    patch user_url(@user), params: { user: { email: nil, password_digest: @user.password_digest } }, as: :json

    assert_response 422
  end

  test "should destroy user" do
    assert_difference('User.count', -1) do
      delete user_url(@user), as: :json
    end

    assert_response 204
  end
end

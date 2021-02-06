require 'test_helper'

class UserTest < ActiveSupport::TestCase
  test "to token payload" do
    user = users(:one)

    assert_equal user.to_token_payload, {sub: user.id, email: user.email }
  end
end

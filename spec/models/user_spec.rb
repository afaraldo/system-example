require 'rails_helper'

RSpec.describe User, type: :model do
  describe ".to_token_payload" do
    it "create a token payload with format {sub: A, email: B}" do
      user = create(:user)
      payload = {sub: user.id, email: user.email}
      expect(user.to_token_payload).to eq payload
    end
  end
end

require 'simplecov'
SimpleCov.start 'rails' do
  # default files of Rails 5
  add_filter "app/jobs/application_job.rb"
  add_filter "app/channels/application_cable/connection.rb"
  add_filter "app/channels/application_cable/channel.rb"

  # files not used
  add_filter "app/mailers/application_mailer.rb"
  add_filter "app/jobs/application_job.rb"

  # only used for login
  add_filter "app/controllers/user_token_controller.rb"
end

ENV['RAILS_ENV'] ||= 'test'

require_relative '../config/environment'
require 'rails/test_help'
class ActiveSupport::TestCase
  # Setup all fixtures in test/fixtures/*.yml for all tests in alphabetical order.
  fixtures :all

  # Add more helper methods to be used by all tests here...
  def authenticated_header
    token = Knock::AuthToken.new(payload: { sub: users(:one).id }).token

    {
        'Authorization': "Bearer #{token}"
    }
  end
end

class ApplicationController < ActionController::API
  before_action :authenticate_and_set_user
  before_action :set_organization
  before_action :set_raven_context

  #rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

  private

    def set_organization
      org = @current_user.organizations.first
      Apartment::Tenant.switch!(org.tenant_name)
    end

    # This method is used by Sentry to send errors to the platform
    def set_raven_context
      Raven.user_context(id: session[:current_user_id]) # or anything else in session
      Raven.extra_context(params: params.to_unsafe_h, url: request.url)
    end

    # This method is used by the Application Controller to return a JSON message
    # with status 404 when a record is not found
    def record_not_found(_e)
      Rails.logger.error(_e)
      render json: "Couldn't find Registration".as_json, status: :not_found
    end
end

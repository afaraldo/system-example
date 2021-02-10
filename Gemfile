source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.7.2'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.2'
gem 'rake', '~> 13.0.1'
# Use postgresql as the database for Active Record
gem 'pg', '>= 0.18', '< 2.0'
# Use Puma as the app server
gem 'puma', '~> 3.11'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
# gem 'jbuilder', '~> 2.5'
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 4.0'
# Use ActiveModel has_secure_password
gem 'bcrypt', '~> 3.1.12', '<= 3.1.12'

# Use ActiveStorage variant
# gem 'mini_magick', '~> 4.8'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development
# gem 'capistrano-rails', group: :development

# Reduces boot times through caching; required in config/boot.rb
gem 'bootsnap', '>= 1.1.0', require: false

# Use Rack CORS for handling Cross-Origin Resource Sharing (CORS), making cross-origin AJAX possible
# gem 'rack-cors'

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  # Test Framework
  gem 'rspec-rails', '~> 3.9 ', '>= 3.9'

end

group :test do
  gem 'faker', '~> 2.13.0', '>= 1.6.3'
  gem 'factory_bot_rails', '~> 5.1', '>= 5.1.1'
  gem 'json-schema', '~> 2.7'
end

group :development do
  gem 'listen', '>= 3.0.5', '< 3.2'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  # better_errors helps debug
  #gem "better_errors"
  #gem "binding_of_caller"
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

# Gem SimpleCov is a code coverage analysis tool for Ruby.
gem 'simplecov', require: false, group: :test

# Rack Middleware for handling Cross-Origin Resource Sharing (CORS)
gem 'rack-cors', require: 'rack/cors'

# Serializer to JSON
gem 'active_model_serializers', '~> 0.10.9'

# Layer for business logic
gem 'active_interaction', '~> 3.7'

# SchemaPlus provides a collection of enhancements and extensions to ActiveRecord
#gem 'schema_plus'

# Ember-cli for Rails
gem 'ember-cli-rails'

# JWT Authentication
gem 'api_guard', '~> 0.4.0'

# Logging gem
gem 'logging-rails', :require => 'logging/rails'

# Errores control
gem 'sentry-raven'

# Paginates
gem 'kaminari', '~> 1.1', '>= 1.1.1'

# filters
gem 'ransack', '~> 2.3'

# Service layer
gem "interactor-rails", "~> 2.0"

# autoincrement
gem 'auto_increment', '~> 1.5', '>= 1.5.1'

# Soft delete
gem 'acts_as_paranoid', '~> 0.6.0'

# Fulltext Search
gem 'pg_search', '~> 2.1.2', '>= 2.1.2'

# Reporting framework
gem 'dossier', '~> 2.13', '>= 2.13.1', git: 'https://github.com/afaraldo/dossier.git'
gem 'reports_kit'

# For InvoiceItem.distinct(:description) is needed
gem 'active_record_distinct_on', '~> 0.1.7'

#for new relic, performance reports
gem 'newrelic_rpm', '~> 6.10', '>= 6.10.0.364'

#for multi-tenancy
gem 'apartment', '~> 2.2.1', '>= 1.0.2'

gem 'second_level_cache', '~> 2.4.0'

#gem 'decent_exposure', '~> 3.0'


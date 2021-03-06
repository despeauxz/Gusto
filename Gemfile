source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.6.3'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 6.0.0'
# Use mysql as the database for Active Record
gem 'mysql2', '>= 0.4.4'
# Use Puma as the app server
gem 'puma', '~> 3.11'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5'
# Transpile app-like JavaScript. Read more: https://github.com/rails/webpacker
gem 'webpacker', '~> 4.0'
# Turbolinks makes navigating your web application faster. Read more: https://github.com/turbolinks/turbolinks
gem 'turbolinks', '~> 5'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.7'
# Use Redis adapter to run Action Cable in production
gem 'redis', '~> 4.0'
gem "redis-rails"
gem 'redis-namespace'
# Use Active Model has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use Active Storage variant
# gem 'image_processing', '~> 1.2'

# Reduces boot times through caching; required in config/boot.rb
gem 'bootsnap', '>= 1.4.2', require: false

# For env variables
gem 'figaro', '~> 1.1', '>= 1.1.1'

# For flash messages
gem "puffly"

# add kaminari for pagination
gem "kaminari"

gem "csv"

# For importing CSV files
gem "roo", "~> 2.7.1"

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem "faker"
  gem "pry"
  gem 'rubocop', require: false
  gem "brakeman"
end

group :development do
  # Access an interactive console on exception pages or by calling 'console' anywhere in the code.
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'foreman'
  gem 'better_errors', '~> 2.5', '>= 2.5.1'
end

group :test do
  # Adds support for Capybara system testing and selenium driver
  gem "capybara"
  gem "codeclimate-test-reporter", "~> 1.0.0"
  gem "database_cleaner"
  gem "factory_bot_rails"
  gem "rspec-rails", "~> 3.5"
  gem "simplecov", "<= 0.13"
  gem 'selenium-webdriver'
  gem "should_not"
  gem "shoulda-matchers", "~> 3.1"
  gem 'rspec-retry'
  # Easy installation and use of web drivers to run system tests with browsers
  gem 'webdrivers'
end

group :production, :staging do
  # Error and Reporting tool
  gem "sentry-raven"
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

# gem for jobs and cron tasks
gem 'sidekiq'
gem "sidekiq-cron", "~> 1.0"

# Gem for mailgun services
gem 'mailgun-ruby'

#Gem for creating and managing database views
gem "scenic"
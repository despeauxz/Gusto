Raven.configure do |config|
    config.dsn = 'https://d018c1bc3e884aae9c88008a7e0214d9:575df15a1a8d46fbb1a85fb181743ef5@sentry.io/1769483'
    config.sanitize_fields = Rails.application.config.filter_parameters.map(&:to_s)
  end
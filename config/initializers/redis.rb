unless Rails.env.test?
    Redis.current = Redis::Namespace.new("gusto", redis: Redis.new)
  else
    Redis.current = Redis::Namespace.new("gusto", redis: MockRedis.new)
  end
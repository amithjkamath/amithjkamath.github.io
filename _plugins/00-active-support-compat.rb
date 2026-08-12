# ActiveSupport (pulled in by jekyll-archives-v2) prints a `to_time` deprecation
# notice on load unless the app states which behaviour it wants. Opt in to the
# timezone-preserving behaviour that becomes the default in Rails 8.1.
require "active_support"

if ActiveSupport.respond_to?(:to_time_preserves_timezone=)
  ActiveSupport.to_time_preserves_timezone =
    ActiveSupport::VERSION::MAJOR >= 8 ? :zone : true
end

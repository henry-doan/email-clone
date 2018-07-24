Devise.setup do |config| 
  config.secret_key = Rails.env.production? ? ENV['DEVISE_SECRET_KEY'] :
  '3c2f652c3703986dc47fa6a0ec2aa97e4db92da44a82a009646672d8bcb5c47b1acd5179f9b3ce2194a53be8424832cc9daa8efa443329f42df7d902a2f9658a'
end
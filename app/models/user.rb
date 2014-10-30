class User < ActiveRecord::Base
  attr_reader :password
  has_many :meals, through: :menus
  has_many :menus

  def password=(new_password)
    self.password_digest = BCrypt::Password.create(new_password)
  end

  def authenticate(test_password)
    if test_password && BCrypt::Password.new(self.password_digest) == test_password
      self
    else
      false
    end
  end
end

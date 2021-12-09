require 'rspec'
require 'rails_helper'
require 'spec_helper'
require 'byebug'

class UserLocator

    attr_accessor :email

    def initialize(email)
        self.email = email
    end
    
    def locate
        User.find_by(email: self.email)
    end

end

RSpec.describe UserLocator do
    let(:locator){ UserLocator.new(email) }
    let(:locate){ locator.locate }
    context "when email matches a user" do
        let!(:user){ User.create!(email: email, username: "username", password: "password") }
        let(:email) { "email@gmail.com" }
        it "returns the user" do
            locate.should eq(user)
        end
    end
end
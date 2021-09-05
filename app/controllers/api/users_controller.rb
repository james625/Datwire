class Api::UsersController < ApplicationController

    def index
        @user = User.all
    end

    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            redirect_to user_url(@user)
        else
            render json: @user.errors.full_messages, status: 401
        end
    end

    def user_params
        params.require(:user).permit(:email, :username, :password)
    end
    
end
class Api::UsersController < ApplicationController

    def index
        @users = User.all
    end

    def show
        @user = User.find_by(id: params[:id])
        @servers = Server.all
        render 'api/users/show_servers'
    end

    def create
        @user = User.new(user_params)
        @servers = Server.all
        if @user.save
            login!(@user)
            render 'api/users/show'
        else
            render json: @user.errors.full_messages, status: 401
        end
    end

    def update
        @user = User.find_by(id: params[:id])
        @servers = Server.all
        if @user.update(username: params[:user][:username])
            render 'api/users/show'
        end
    end

    def user_params
        params.require(:user).permit(:email, :username, :password)
    end
    
end
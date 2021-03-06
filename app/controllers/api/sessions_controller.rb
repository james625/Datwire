class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        @servers = Server.all
        if @user
            login!(@user)
            render 'api/users/show'
        else
            render json: [" - Login or password is invalid."], status: 401
        end
    end

    def destroy
        logout!
        render json: {}
    end

end
class Api::UsersServersController < ApplicationController

    def create
        @user_server = UsersServer.new(users_server_params)
        @user_server.save
        render 'api/users_servers/show'
    end

    def destroy
        @user_server = UsersServer.find_by(user_id: params[:users_server][:user_id], server_id: params[:users_server][:server_id])
        @user_server.destroy
        render 'api/users_servers/show'
    end
    
    def users_server_params
        params.require(:users_server).permit(:user_id, :server_id)
    end

end
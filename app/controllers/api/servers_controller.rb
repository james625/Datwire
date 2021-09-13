class Api::ServersController < ApplicationController

    def index
        @servers = Server.all
        render 'api/servers/index'
    end

    def show
        @server = Server.find_by(server_params)
    end

    def create
        @server = Server.new(server_params)
        @server.creator_id = current_user.id
        if @server.save
            Channel.create(server_id: @server.id, name: "general")
            render 'api/servers/show'
        else
            render json: @server.errors.full_messages, status: 422
        end
    end

    def update
        @server = Server.find_by(id: params[:id])
        if @server.update(server_params)
            render 'api/servers/show'
        else
            render json: @server.errors.full_messages, status: 422
        end
    end

    def destroy
        @server = Server.find_by(id: params[:id])
        @server.destroy
    end
    
    def server_params
        params.require(:server).permit(:name)
    end
    
end
class Api::MessagesController < ApplicationController

    def index
        @messages = Message.all
        @channel_id = params[:channelId]
        render 'api/messages/index'
    end

    def create
        @message = Message.new(message_params)
        if @message.save
            render 'api/messages/show'
        end
    end

    def message_params
        params.require(:message).permit(:author_id, :body, :channel_id, :server_id)
    end

end
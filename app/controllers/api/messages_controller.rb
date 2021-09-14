class Api::MessagesController < ApplicationController

    def create
        @message = Message.new(message_params)
        if @message.save
        end
    end

    def message_params
        params.require(:message).permit(:author_id, :body, :channel_id, :server_id)
    end

end
class Api::DirectMessagesController < ApplicationController

    def index
        
    end

    def create
        @dm = DirectMessage.new(direct_message_params)
        if @message.save
            render 'api/direct_messages/show'
        end
    end

    def direct_message_params
        params.require(:message).permit(:user1_id, :body, :user2_id)
    end

end
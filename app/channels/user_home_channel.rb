class UserHomeChannel < ApplicationCable::Channel

    def subscribed
        @userhomechannel = User.find_by(id: params[:id])
        stream_for @userhomechannel
    end

    def receive(data)
        UserHomeChannel.broadcast_to(@userhomechannel, message: data['message'])
    end

end
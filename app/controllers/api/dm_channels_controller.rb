class Api::DmChannelsController < ApplicationController

    def index
        @dmcs = DmChannel.all
        @user_id = params[:userId].to_i
        render 'api/dm_channels/index'
    end

    def create
        @dmc = DmChannel.new(dm_channel_params)
        if @dmc.save
            render 'api/dm_channels/show'
        end
    end

    def dm_channel_params
        params.require(:dm_channel).permit(:user1_id, :user2_id)
    end

end
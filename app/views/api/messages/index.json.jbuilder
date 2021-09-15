@messages.each do |message|
    if message.channel_id == @channel_id.to_i
        json.set! message.id, message
    end
end
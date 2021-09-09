@user.created_servers.each do |server|
    json.set! server.id do
        json.extract! server, :id, :name, :users, :creator, :channels
    end
end

@user.servers.each do |server|
    json.set! server.id do
        json.extract! server, :id, :name, :users, :creator, :channels
    end
end
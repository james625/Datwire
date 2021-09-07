json.array! @user.servers do |server|
    json.set! server.id, server
end

json.array! @user.created_servers do |server|
    json.set! server.id, server
end
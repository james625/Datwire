
json.array! @user.servers do |server|
    json.set! server.id, server
end

json.array! @user.created_servers do |server|
    json.set! server.id, server
end

# @users.servers.each do |server|
#     json.set! server.id do
#         json.extract! server, :id, :name
#     end
# end
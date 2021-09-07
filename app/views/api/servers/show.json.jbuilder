json.extract! @server, :id, :name

json.users do
    json.id @server.creator.id
    json.array! @server.users do |user|
        json.id user.id
    end
end
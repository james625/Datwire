json.extract! @user, :id, :username, :email

servers = (@servers - (@user.created_servers + @user.servers))
json.join_servers servers
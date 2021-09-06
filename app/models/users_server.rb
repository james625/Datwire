# == Schema Information
#
# Table name: users_servers
#
#  id         :bigint           not null, primary key
#  server_id  :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class UsersServer < ApplicationRecord

    belongs_to :server,
    primary_key: :id,
    foreign_key: :server_id,
    class_name: :Server

    belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User
    
end

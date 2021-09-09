# == Schema Information
#
# Table name: servers
#
#  id         :bigint           not null, primary key
#  creator_id :integer          not null
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Server < ApplicationRecord

    validates :name, presence: true

    belongs_to :creator,
    primary_key: :id,
    foreign_key: :creator_id,
    class_name: :User

    has_many :users_servers,
    primary_key: :id,
    foreign_key: :server_id,
    class_name: :UsersServer

    has_many :users,
    through: :users_servers,
    source: :user
    
    has_many :channels,
    primary_key: :id,
    foreign_key: :server_id,
    class_name: :Channel
    
end

# == Schema Information
#
# Table name: dm_channels
#
#  id         :bigint           not null, primary key
#  user1_id   :integer          not null
#  user2_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class DmChannel < ApplicationRecord

    belongs_to :user1,
    primary_key: :id,
    foreign_key: :user1_id,
    class_name: :User

    belongs_to :user2,
    primary_key: :id,
    foreign_key: :user2_id,
    class_name: :User

    has_many :messages,
    primary_key: :id,
    foreign_key: :dm_channel_id,
    class_name: :DirectMessage
end

# == Schema Information
#
# Table name: direct_messages
#
#  id            :bigint           not null, primary key
#  body          :text             not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  author_id     :integer
#  dm_channel_id :integer
#
class DirectMessage < ApplicationRecord

    validates :body, presence: true

    belongs_to :dmchannel,
    primary_key: :id,
    foreign_key: :dm_channel_id,
    class_name: :DmChannel

    belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

end

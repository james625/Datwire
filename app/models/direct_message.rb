# == Schema Information
#
# Table name: direct_messages
#
#  id         :bigint           not null, primary key
#  user1_id   :integer          not null
#  user2_id   :integer          not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class DirectMessage < ApplicationRecord

    validates :body, presence: true

    belongs_to :user1,
    primary_key: :id,
    foreign_key: :user1_id,
    class_name: :User

    belongs_to :user2,
    primary_key: :id,
    foreign_key: :user2_id,
    class_name: :User

end

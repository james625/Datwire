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
require "test_helper"

class DirectMessageTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

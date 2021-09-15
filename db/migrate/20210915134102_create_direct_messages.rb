class CreateDirectMessages < ActiveRecord::Migration[6.1]
  def change
    create_table :direct_messages do |t|
      t.integer :user1_id, null: false
      t.integer :user2_id, null: false
      t.text :body, null: false

      t.timestamps
    end
    add_index :direct_messages, :user1_id
    add_index :direct_messages, :user2_id
  end
end

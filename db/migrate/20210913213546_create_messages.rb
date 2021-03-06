class CreateMessages < ActiveRecord::Migration[6.1]
  def change
    create_table :messages do |t|
      t.text :body, null: false
      t.integer :author_id, null: false
      t.integer :channel_id, null: false
      t.integer :server_id, null: false

      t.timestamps
    end

    add_index :messages, :author_id
    add_index :messages, :channel_id
    add_index :messages, :server_id
  end
end

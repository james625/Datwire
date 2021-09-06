class CreateUsersServers < ActiveRecord::Migration[6.1]
  def change
    create_table :users_servers do |t|
      t.integer :server_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end

    add_index :users_servers, :server_id
    add_index :users_servers, :user_id
  end
end

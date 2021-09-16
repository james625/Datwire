class Editdms < ActiveRecord::Migration[6.1]
  def change
    add_column :direct_messages, :author_id, :string
    add_index :direct_messages, :author_id
  end
end

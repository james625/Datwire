class Changecolumndms < ActiveRecord::Migration[6.1]
  def change
    remove_column :direct_messages, :author_id
    add_column :direct_messages, :author_id, :integer
  end
end

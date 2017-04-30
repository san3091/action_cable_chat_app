class AddLineNumberToLine < ActiveRecord::Migration[5.0]
  def change
    add_column :lines, :line_number, :integer
  end
end

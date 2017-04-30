class CreateTexts < ActiveRecord::Migration[5.0]
  def change
    create_table :texts do |t|
      t.string :title

      t.timestamps
    end
    add_index :texts, :title
  end
end

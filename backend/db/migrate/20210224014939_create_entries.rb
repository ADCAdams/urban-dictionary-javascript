class CreateEntries < ActiveRecord::Migration[6.0]
  def change
    create_table :entries do |t|
      t.string :term
      t.integer :definition_count
      t.integer :likes

      t.timestamps
    end
  end
end

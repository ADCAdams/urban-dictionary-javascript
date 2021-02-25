class CreateDefinitions < ActiveRecord::Migration[6.0]
  def change
    create_table :definitions do |t|
      t.string :description
      t.string :example
      t.integer :likes


      t.timestamps
    end
  end
end

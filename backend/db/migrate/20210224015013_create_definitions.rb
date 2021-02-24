class CreateDefinitions < ActiveRecord::Migration[6.0]
  def change
    create_table :definitions do |t|
      t.string :description
      t.string :example
      t.integer :term_id
      t.references :term

      t.timestamps
    end
  end
end

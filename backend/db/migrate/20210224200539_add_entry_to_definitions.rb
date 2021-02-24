class AddEntryToDefinitions < ActiveRecord::Migration[6.0]
  def change
    add_reference :definitions, :entry
  end
end

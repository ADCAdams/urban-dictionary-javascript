class DefinitionSerializer
  include FastJsonapi::ObjectSerializer
  attributes  :id, :description, :example, :entry_id
  belongs_to :entry
end

class DefinitionSerializer
  include FastJsonapi::ObjectSerializer
  attributes  :id, :description, :example, :likes
  belongs_to :entry
end

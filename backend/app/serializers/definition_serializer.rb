class DefinitionSerializer
  include FastJsonapi::ObjectSerializer
  attributes 
  belongs_to :entry
end

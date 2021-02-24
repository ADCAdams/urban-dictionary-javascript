class EntrySerializer
  include FastJsonapi::ObjectSerializer
  attributes 
  has_many :definitions
end

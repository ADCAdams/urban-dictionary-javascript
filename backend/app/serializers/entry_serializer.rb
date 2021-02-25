class EntrySerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :term, :definition_count, :definitions
  has_many :definitions
end

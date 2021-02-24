class EntrySerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :term, :definition_count, likes
  has_many :definitions
end

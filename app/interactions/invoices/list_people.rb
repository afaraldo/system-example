class ListPeople < ActiveInteraction::Base
  hash :filter do
    string :name_or_document_number_cont
  end
  hash :page do
    integer :size
    integer :number, default: 1
  end
  string :sort


  def to_model
    Person.new
  end

  def execute
    @q = Person.ransack(filter)
    @q.sorts = sort
    @q = @q.result
    @people = @q.page(page[:number]).per(page[:size])#.page(page[:size])
    @people
  end
end

class CreateInvoice < ActiveInteraction::Base
  string :name, :number, :ruc, :stamping_number, :type
  boolean :condition
  date :date, :stamping_expiry
  integer :total, :total_iva
  array :tag_ids, default: nil

  validates :name, :date, :condition, :type,
            presence: true

  def to_model
    Invoice.new
  end

  def execute
    ActiveRecord::Base.transaction do
      invoice = Invoice.new(inputs)
      person = Person.find_or_initialize_by(document_number: inputs[:ruc])
      person.name = invoice.name if person.new_record?
      invoice.person = person
      unless invoice.save
        errors.merge!(invoice.errors)
        raise ActiveRecord::Rollback
      end

      invoice
    end
  end
end



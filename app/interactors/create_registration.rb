class CreateRegistration
  include Interactor

  def call()
    registration = Registration.new(context.to_h)
    student = Person.find_or_initialize_by(document_number: context.student_document_number)
    student.assign_attributes(name: context.student_name,
                             document_number: context.student_document_number,
                             lastname: context.student_lastname,
                             born_date: context.student_born_date)
    registration.student = student
    if registration.save
      context.model = registration
    else
      context.model = registration
      context.fail!(message: registration.errors.full_messages.to_sentence)
    end
  end
end

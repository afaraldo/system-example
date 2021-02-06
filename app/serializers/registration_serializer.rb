class RegistrationSerializer < ActiveModel::Serializer
  attributes :id,
             :date,
             :number,
             :student_name,
             :student_lastname,
             :student_born_date,
             :student_nationality,
             :student_document_number,
             :student_blood_type,
             :student_graduated_from,
             :student_graduated_year,
             :student_address,
             :student_cellphone,
             :student_notes,

             :tutor_name,
             :tutor_lastname,
             :tutor_address,
             :tutor_cellphone,
             :tutor_workplace,
             :tutor_notes

  belongs_to :course
  belongs_to :student
end

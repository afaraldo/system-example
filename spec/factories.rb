FactoryBot.define do
  factory :invoice do
    date { Faker::Date.in_date_period }
    name { Faker::Name.unique.name }
    ruc { Faker::Number.number(digits: 7) }
    stamping_number { Faker::Number.non_zero_digit }
    stamping_expiry { Faker::Date.in_date_period }
    number { Faker::Number.number(digits: 7) }
    condition { true } # True is cash
    total { Faker::Number.number(digits: 7) }
    total_iva { Faker::Number.number(digits: 7) }
    type { 'Sale' }
    person
    #invoice_item { association :invoice_item, invoice_item: instance }
  end

  factory :invoice_item do
    invoice { association :invoice, invoice: instance }
    description { Faker::Commerce.product_name  }
    quantity { Faker::Number.non_zero_digit }
    iva0 { Faker::Number.number(digits: 7) }
    iva5 { Faker::Number.number(digits: 7) }
    iva10 { Faker::Number.number(digits: 7) }
  end

  factory :person do
    name { Faker::Name.first_name }
    lastname { Faker::Name.last_name }
    document_number { Faker::IDNumber.spanish_citizen_number  }
    born_date { 18.years.ago }
  end

  factory :user do
    email { Faker::Internet.email }
    password { Faker::Internet.password }
    password_digest { Faker::Internet.password }
  end
end
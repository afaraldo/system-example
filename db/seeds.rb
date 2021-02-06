# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user = User.find_by_email("admin@email.com")
user = User.create(email: "admin@email.com", password: "123456") unless User.find_by_email("admin@email.com")
organization = Organization.new(name: 'email')
organization.users << user
organization.save

user = User.find_by_email("secretaria@arquitectura.com")
user = User.create(email: "secretaria@arquitectura.com", password: "123456") unless User.find_by_email("secretaria@arquitectura.com")
organization = Organization.new(name: 'arquitectura')
organization.users << user
organization.save

Person.create(name: 'Adrian', lastname: 'Aguero', born_date: "01-01-1990", document_number: "4925875")
Person.create(name: 'Fátima', lastname: 'Talavera', born_date: "01-01-1990", document_number: "5982347")
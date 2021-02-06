require 'factory_bot'
require 'faker'
require File.expand_path("spec/factories.rb")

namespace :system do
  include FactoryBot::Syntax::Methods
  desc "TODO"
  task fake_data: :environment do
    30.times do |i|
      item_count = i
      FactoryBot.create(:invoice, {type: 'Sale'}) do |invoice|
        FactoryBot.create_list(:invoice_item, i, invoice: invoice)
      end
    end
    30.times do |i|
      item_count = i
      FactoryBot.create(:invoice, {type: 'Buy'}) do |invoice|
        FactoryBot.create_list(:invoice_item, i, invoice: invoice)
      end
    end
  end
end

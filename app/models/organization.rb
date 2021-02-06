class Organization < ApplicationRecord
  has_and_belongs_to_many :users
  validates_presence_of :users
  validates :name, uniqueness: true
  after_create :create_tenant

  def tenant_name
    "organization_#{self.id}"
  end

  private

  def create_tenant
    Apartment::Tenant.create(self.tenant_name)
  end
end

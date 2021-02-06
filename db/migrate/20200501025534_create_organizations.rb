class CreateOrganizations < ActiveRecord::Migration[5.2]
  def change
    create_table :organizations do |t|
      t.string :name

      t.timestamps
    end

    create_table :organizations_users do |t|
      t.references :organization
      t.references :user

      t.timestamps
    end
  end
end

class CreatePeople < ActiveRecord::Migration[5.0]
  def change
    create_table :people do |t|
      t.string :name
      t.text :bio
      t.date :birthday
      t.integer :age

      t.timestamps
    end
  end
end

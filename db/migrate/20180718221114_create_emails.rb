class CreateEmails < ActiveRecord::Migration[5.2]
  def change
    create_table :emails do |t|
      t.string :header
      t.string :body
      t.string :sender
      t.string :category
      t.string :filter
      t.string :time
      t.belongs_to :user

      t.timestamps
    end
  end
end

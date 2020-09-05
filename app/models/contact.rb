class Contact < ActiveRecord::Base
    validates :name, presence: true
    validates :email, presence: true
    validates :comments, presence: true
end

# contact.rb checks the database file in order to determine the class's "Contact" parameters.
# Gusto

## External dependencies

This web application is written with Ruby using the Ruby on Rails framework and a MySQL database. You need the latest Ruby version for the application to work

-   To install rvm , visit RVM
-   To install this ruby version, you can run the command below but you can use other channels to install it as well e.g. rbenv.
    `rvm install ruby-2.6.3`
-   To install MySQL, run
    `brew install postgres`
    To know more about Ruby or Rails visit Ruby Lang or Ruby on Rails.

## Installation

Please make sure you have Ruby(v 2.6.3) and PostgreSQL installed. Take the following steps to setup the application on your local machine:

1.  Run `git clone https://github.com/despeauxz/Quidax.git`
2.  Run `bundle install` to install all required gems
3.  Run cp config/application.yml.sample config/application.yml to create the application.yml file.
    Note Update the MySQL username and password if you have one

## Database

#### Configuring the Database

-   After creating your config/application.yml, you need to create these 2 databases Quidax and Quidax_test. To create them, run:
    `rails db:migrate`

#### Configuring Host

-   on Mac, run `sudo nano /etc/hosts`.
-   Edit the terminal and include `127.0.0.1 gusto.test` to the list of hosts
-   Save changes and exit the terminal
-   Run `rails s` to start the application
-   Visit: [http://gusto.test:3000](http://gusto.test:3000)

#### Test

-   Run test with `rspec spec`

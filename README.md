# README

git clone git@gitlab.com:afaraldo/system-api.git
bundle install
rake db:create
rake db:migrate
rake db:seed

cd frontend
npm install

OR only

sudo docker-compose up --build

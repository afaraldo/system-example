FROM ruby:2.7
#RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
#RUN apt-get update -qq && apt-get install -y npm nodejs

#RUN mkdir /myapp
WORKDIR /myapp
COPY Gemfile /myapp/Gemfile
COPY Gemfile.lock /myapp/Gemfile.lock
#ENV EMBER_ENV production
#ENV RAILS_ENV production
#ARG RAILS_MASTER_KEY
RUN bundle install
RUN apt-get update
RUN apt-get install -y nodejs npm
COPY . /myapp
# Add a script to be executed every time the container starts.
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3000
#RUN bundle exec rake assets:precompile
# Start the main process.
#CMD bundle exec rails server -b 0.0.0.0 -p $PORT -e production

CMD ["rails", "server", "-b", "0.0.0.0"]

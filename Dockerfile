FROM ruby:3
#RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
RUN apt-get update -qq && apt-get install -y npm nodejs postgresql-client make
#RUN mkdir /myapp
WORKDIR /myapp
COPY Gemfile /myapp/Gemfile
COPY Gemfile.lock /myapp/Gemfile.lock
#ENV BUNDLER_VERSION 2.1.2
#ENV EMBER_ENV production
# ENV RAILS_ENV production
#ARG RAILS_MASTER_KEY
#RUN gem install bundler && bundle install --jobs 20 --retry 5
RUN bundle install
COPY . /myapp

# RUN chmod -R 777 /myapp/frontend/tmp/
#RUN chmod -R 777 /myapp/tmp/

# Add a script to be executed every time the container starts.
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3000
#RUN bundle exec rake assets:precompile
# Start the main process.
CMD ["rails", "server", "-b", "0.0.0.0"]
#CMD bundle exec rails server -b 0.0.0.0 -p $PORT -e production

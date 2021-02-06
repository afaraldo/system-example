'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'frontend',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },
    fontawesome: {
      icons: {
        'free-solid-svg-icons': 'all',
        'free-regular-svg-icons': 'all'
      }
    },
    flashMessageDefaults: {
      // flash message defaults
      timeout: 500,
      extendedTimeout: 500,
      priority: 100,
      sticky: true,
      showProgress: true,
      destroyOnClick: true,

      // service defaults
      type: 'info',
      types: ['success', 'warning', 'info', 'danger'],
      preventDuplicates: false
    },
    'ember-power-select': {
      theme: 'bootstrap'
    },
    //i18n: {defaultLocale: 'es'},
    moment: {
      // Options:
      // 'all' - all years, all timezones
      // '2010-2020' - 2010-2020, all timezones
      // 'none' - no data, just timezone API

    },
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    sentry: {
      dsn: 'https://b08e057fdd814600b4fcd0a0d2a43aee@o313902.ingest.sentry.io/5365024'
    },

  };
  ENV.host = process.env.API_URL;
  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;

    ENV['ember-cli-mirage'] = {
      enabled: false
    }
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
    ENV.host = 'https://nandutic.herokuapp.com';
  }

  ENV['ember-simple-auth'] = {
    routeAfterAuthentication: 'courses', // necessary to redirect the login when invalidating the session
    routeIfAlreadyAuthenticated: 'index'
  };
  ENV['ember-simple-auth-token'] = {
    serverTokenEndpoint: ENV.host + '/api/users/sign_in', // Server endpoint to send authenticate request
    tokenPropertyName: 'jwt', // Key in server response that contains the access token,
    //tokenDataPropertyName: 'tokenData', // Key in session to store token data
    tokenExpirationInvalidateSession: true, // Enables session invalidation on token expiration
    refreshAccessTokens: true, // Enables access token refreshing
    serverTokenRefreshEndpoint: ENV.host + '/api/token-auth/', // Server endpoint to send refresh request
    refreshTokenPropertyName: 'jwt', // Key in server response that contains the refresh token
    tokenExpireName: 'exp', // Field containing token expiration
    refreshLeeway: 60, // refresh 5 minutes (300 seconds) before expiration,
    authorizationHeaderName: 'Authorization', // Header name added to each API request
    authorizationPrefix: 'Bearer ', // Prefix added to each API request
  };

  return ENV;
};

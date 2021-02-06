'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    sassOptions: {
      includePaths: ['node_modules/ember-power-select/app/styles']
    },
    'ember-bootstrap': {
      bootstrapVersion: 4,
      importBootstrapFont: true,
      importBootstrapCSS: false,
      whitelist: ['bs-button', 'bs-modal', 'bs-form', 'bs-nav','bs-dropdown','bs-form','bs-alert','bs-button-group',
        'bs-nav-var','bs-modal']
    },
    'ember-power-select': {
      theme: 'bootstrap'
    },
    flatpickr: {
      locales: ['es']
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  // Necesary for language of datepicker - Pikaday input addon
  app.import('node_modules/moment/locale/es.js');

  //app.import('node_modules/@coreui/coreui/dist/css/coreui.css', {sourcemaps: {enabled: false}});
  //app.import('node_modules/@coreui/coreui/dist/css/coreui-standalone.css', {sourcemaps: {enabled: false}});
  app.import('node_modules/perfect-scrollbar/css/perfect-scrollbar.css');
  app.import('node_modules/perfect-scrollbar/dist/perfect-scrollbar.js');
  //app.import('node_modules/@coreui/coreui/js/dist/ajax-load.js');
  //app.import('node_modules/@coreui/coreui/js/dist/aside-menu.js');
  //app.import('node_modules/@coreui/coreui/js/dist/index.js');
  //app.import('node_modules/@coreui/coreui/js/dist/polyfill.js');
  //app.import('node_modules/@coreui/coreui/js/dist/sidebar.js');
  //app.import('node_modules/@coreui/coreui/js/dist/toggle-classes.js');
  app.import('node_modules/@coreui/coreui/dist/js/coreui.js');
  app.import('node_modules/@coreui/coreui/dist/js/coreui-utilities.js');

  return app.toTree();
};

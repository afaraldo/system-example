import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  // all routes that require the session to be authenticated
  this.route('index', { path: '/' });
  this.route('invoices', function() {
    this.route('new');
    this.route('edit', { path: '/:invoice_id/edit' });
  });
  this.route('provider-invoices', function() {
    this.route('new');
    this.route('edit', { path: '/:provider_invoice_id/edit' });
  });
  this.route('registrations', function() {
    this.route('new');
    this.route('edit', { path: '/edit/:registration_id' });
    this.route('list');
  });
  this.route('reports', function() {
    this.route('invoices');
    this.route('provider-invoices');
  });
  this.route('payments', function() {
    this.route('new');
  });
  this.route('courses', function() {
    this.route('new');
    this.route('edit', { path: '/edit/:course_id' });
    this.route('list');
  });
  this.route('products', function() {
    this.route('list');
  });
  this.route('movements', function() {
    this.route('new');
    this.route('list');
  });
  this.route('restaurant', function() {
    this.route('tables');
    this.route('orders', function() {
      this.route('order', { path: '/:order_id' });
    });
  });
  this.route('expenses', function() {
    this.route('new');
  });
  this.route('dashboard');
});

export default Router;

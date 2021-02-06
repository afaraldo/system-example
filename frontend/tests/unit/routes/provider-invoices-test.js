import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | provider-invoices', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:provider-invoices');
    assert.ok(route);
  });
});

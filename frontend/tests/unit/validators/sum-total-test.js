import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Validator | sum-total', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    const validator = this.owner.lookup('validator:sum-total');
    assert.ok(validator);
  });
});

import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Validator | messages', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    const validator = this.owner.lookup('validator:messages');
    assert.ok(validator);
  });
});

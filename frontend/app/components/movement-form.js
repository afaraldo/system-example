import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  buttonLabel: computed(function() {
    return 'Guardar';
  }),
  actions: {
    search: function(description) {
      return this.get('store').query('movement', { q: {name_cont: description}})
    },
    submit: function() {
      this.saveAction();
    }
  }
});

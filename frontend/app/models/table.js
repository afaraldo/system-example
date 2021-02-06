import DS from 'ember-data';
const { Model } = DS;
import { computed } from '@ember/object';

export default Model.extend({
  name: DS.attr('string'),
  order: DS.belongsTo('order'),

  clientName: computed('order.name', function() {
    return `${this.order.name}`;
  })
});

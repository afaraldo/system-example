import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  code:  DS.attr('string'),
  name:  DS.attr('string'),
  price: DS.attr('number'),
});

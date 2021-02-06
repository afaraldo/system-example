import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  expiry_date: DS.attr('date'),
  price: DS.attr('number'),
  product: DS.belongsTo('product'),
  course: DS.belongsTo('course'),
});

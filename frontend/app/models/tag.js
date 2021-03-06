import Model from '@ember-data/model';
import DS from 'ember-data';

export default Model.extend({
  name: DS.attr('string'),
  invoices: DS.hasMany('invoice'),
});

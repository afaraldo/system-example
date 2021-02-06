import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  description: DS.attr('string'),
  date: DS.attr('date', {
    defaultValue() { return new Date(); }
  }),
  amount: DS.attr('number'),
  isIncome: DS.attr('boolean')
});


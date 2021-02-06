import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  name: DS.attr('string'),
  startDate: DS.attr('date', {
    defaultValue() { return new Date(); }
  }),
  endDate: DS.attr('date'),
  'course-concepts': DS.hasMany('course-concept'),
});

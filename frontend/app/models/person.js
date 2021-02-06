import DS from 'ember-data';
const { Model } = DS;
import { computed } from '@ember/object';

export default Model.extend({
  documentNumber: DS.attr('string'),
  name:  DS.attr('string'),
  lastname: DS.attr('string'),
  birthdate: DS.attr('date'),
  cellphone: DS.attr('string'),
  nationality: DS.attr('string'),
  observations: DS.attr('string'),
  registrations: DS.hasMany('registration'),

  fullName: computed('name', 'lastname', function() {
    if (this.lastname){
      return `${this.name} ${this.lastname}`;
    } else {
      return `${this.name}`;
    }

  }),

  fullInfo: computed('name', 'lastname', function() {
    return `${this.name} ${this.lastname}`;
  }),
});

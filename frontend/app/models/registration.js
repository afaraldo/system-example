import DS from 'ember-data';
import { computed } from '@ember/object';
const { Model } = DS;

export default Model.extend({
  date: DS.attr('date', {
    defaultValue() { return new Date(); }
  }),
  studentName: DS.attr('string'),
  studentLastname: DS.attr('string'),
  studentBornDate: DS.attr('date'),
  studentNationality: DS.attr('string'),
  studentDocumentNumber: DS.attr('string'),
  studentBloodType: DS.attr('string'),
  studentGraduatedFrom: DS.attr('string'),
  studentGraduatedYear: DS.attr('date'),
  studentAddress: DS.attr('string'),
  studentCellphone: DS.attr('string'),
  studentNotes: DS.attr('string'),
  tutorName: DS.attr('string'),
  tutorLastname: DS.attr('string'),
  tutorAddress: DS.attr('string'),
  tutorCellphone: DS.attr('string'),
  tutorWorkplace: DS.attr('string'),
  tutorNotes: DS.attr('string'),
  course: DS.belongsTo('course', { async: true }),

  studentFullname: computed('studentName', 'studentLastname', function() {
    return `${this.studentName} ${this.studentLastname}`;
  })
});

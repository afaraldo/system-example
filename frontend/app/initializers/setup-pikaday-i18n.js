import EmberObject from '@ember/object';
import moment from 'moment';

export function initialize(application) {
  let i18n = EmberObject.extend({
    previousMonth: 'Vorheriger Monat',
    nextMonth: 'Nächster Monat',
    months: moment.localeData()._months,
    weekdays: moment.localeData()._weekdays,
    weekdaysShort: moment.localeData()._weekdaysShort,
    format: "DD/MM/YYYY",
  });
  application.register('pikaday-i18n:main', i18n, { singleton: true });
  application.inject('component:pikaday-input', 'i18n', 'pikaday-i18n:main');
}

export default {
  initialize
};

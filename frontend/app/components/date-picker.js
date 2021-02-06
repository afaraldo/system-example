import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class DatePickerComponent extends Component {
  @tracked from = this.args.from || moment().startOf('day');
  @tracked to = this.args.to || moment().endOf('day');
  @tracked ranges = {
    'Hoy': [moment().startOf('day'), moment().endOf('day')],
    'Ayer': [moment().subtract(1, 'days').startOf('day'), moment().subtract(1, 'days').endOf('day')],
    'Últimos 7 Días': [moment().subtract(7, 'days'), moment()],
    'Últimos 30 Días': [moment().subtract(30, 'days'), moment()],
    'Mes actual': [moment().startOf('month'), moment().endOf('month')],
    'Mes pasado': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
  }
}

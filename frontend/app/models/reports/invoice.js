import Model, { hasMany, attr } from '@ember-data/model';
import { computed } from '@ember/object';

export default class ReportsInvoiceModel extends Model {
  @attr name;
  @attr ruc;
  @attr number;
  @attr date;
  @attr description;
  @attr quantity;
  @attr total;
  @attr tags;

  @computed('quantity', 'total')
  get unit_price() {
    return this.total / this.quantity;
  }
}

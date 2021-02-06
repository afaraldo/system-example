import DS from 'ember-data';
const { Model } = DS;
import moment from 'moment';
import { computed, set } from '@ember/object';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  name: validator('presence', true),
  number: [
    validator('presence', true),
    validator('unique-invoice-number', true),
  ],
  ruc: validator('presence', true),
  date: validator('presence', true),
  stampingNumber: validator('presence', true),
  stampingExpiry: validator('presence', true),
  condition: validator('presence', true),
  invoiceExpiry: validator('presence',{
    presence: true,
    disabled: computed.equal('model.condition', true)
  }),
  total: [
    validator('presence', true),
    //validator('sum-total', true),
  ],
  items: validator('has-many')
});

export default Model.extend(Validations, {
  date: DS.attr('date', {
    defaultValue() { return Date(); }
  }),
  stampingNumber: DS.attr('string'),
  stampingExpiry: DS.attr('string'),
  number: DS.attr('string'),
  condition: DS.attr('boolean', {
    defaultValue() { return true }
  }),
  type: DS.attr('string'),
  total: DS.attr('number'),
  name: DS.attr('string'),
  ruc: DS.attr('string'),
  invoiceExpiry: DS.attr('date'),
  totalIVA: DS.attr('number'),

  person: DS.belongsTo('person'),
  items: DS.hasMany('invoice-item', {async: true}),
  tags: DS.hasMany('tag', {async: true}),

  fullInfo: computed('name', function() {
    return `${this.get('name') + ' - ' + this.get('ruc')}`;
  }),

  conditionText: computed('condition', function() {
    return this.get('condition') ? 'contado' : 'crédito';
  }),

  dv: computed('ruc', function() {
    let ruc = this.get('ruc');
    const basemax = 11;
    let total = 0;
    let k = 2;
    let dv;
    if (ruc){
      ruc.split("").reverse().forEach((digit) => {
        if (k > basemax){ k = 2 }
        total += digit * k;
        k += 1;
      });
      let rest = total % basemax;
      if (rest > 1) {
        dv = 11 - rest
      } else {
        dv = 0
      }
    } else {
      dv = '-';
    }

    return `${dv}`;
  }),
  itemAmount: computed('items.@each', function() {
    return this.items.length;
  }),
  subtotalIva0: computed('items.@each.[]', 'items.@each.{iva0}', function() {
    return this.items.reduce((acc, item) => { return acc + parseInt(item.iva0) | 0 ; }, 0);
  }),
  subtotalIva5: computed('items.@each.[]', 'items.@each.{iva5}', function() {
    return this.items.reduce((acc, item) => { return acc + parseInt(item.iva5) | 0 ; }, 0);
  }),
  subtotalIva10: computed('items.@each.[]', 'items.@each.{iva10}', function() {
    return this.items.reduce((acc, item) => { return acc + parseInt(item.iva10) | 0; }, 0);
  }),
  IVAtotal: computed('items.@each.[]', 'items.@each.{taxIVA,subtotal}', function() {
    return (this.subtotalIva5 / 21) + (this.subtotalIva10 / 11);
  }),
});

import DS from 'ember-data';
const { Model } = DS;
import { validator, buildValidations } from 'ember-cp-validations';
import { computed, set } from '@ember/object';

const Validations = buildValidations({
  quantity: validator('presence', { presence: true, ignoreBlank: true }),
  description: validator('presence', { presence: true, ignoreBlank: true }),
  iva0: validator('presence', { presence: true, ignoreBlank: true }),
  iva5: validator('presence', { presence: true, ignoreBlank: true }),
  iva10: validator('presence', { presence: true, ignoreBlank: true }),
});

export default Model.extend(Validations, {
  invoice: DS.belongsTo('invoice'),
  quantity: DS.attr('number', {
    defaultValue() { return 1 }
  }),
  description: DS.attr('string'),
  product: DS.belongsTo('product'),
  price: DS.attr('number'),
  iva0:  DS.attr('number',{ defaultValue: 0 }),
  iva5:  DS.attr('number',{ defaultValue: 0 }),
  iva10: DS.attr('number',{ defaultValue: 0 }),

  unitPrice: computed('iva0','iva5','iva10', 'quantity', function() {
    let unitPrice = (parseInt(this.iva0 | 0) + parseInt(this.iva5 | 0) + parseInt(this.iva10 | 0)) / this.quantity ;
    return unitPrice;
  }),
});

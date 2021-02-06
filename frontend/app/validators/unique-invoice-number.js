import BaseValidator from 'ember-cp-validations/validators/base';

const UniqueInvoiceNumber = BaseValidator.extend({
  store: Ember.inject.service(),
  validate(/*value, options, model, attribute*/) {
    return this.get('store').query('invoice', {q: {number_eq: this.model.number, stamping_number_eq: this.model.stampingNumber}})
      .then((invoices) => {
      let invoice = invoices.firstObject ? invoices.firstObject : null;
      if(invoice && invoice.id !== this.model.id) {
        let message = `El número ${this.model.number} ya fue usado`;
        return message;
      } else {
        return true;
      }
    })
  }
});

UniqueInvoiceNumber.reopenClass({
  /**
   * Define attribute specific dependent keys for your validator
   *
   * [
   * 	`model.array.@each.${attribute}` --> Dependent is created on the model's context
   * 	`${attribute}.isValid` --> Dependent is created on the `model.validations.attrs` context
   * ]
   *
   * @param {String}  attribute   The attribute being evaluated
   * @param {Unknown} options     Options passed into your validator
   * @return {Array}
   */
  getDependentsFor(/* attribute, options */) {
    return [];
  }
});

export default UniqueInvoiceNumber;

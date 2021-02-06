import BaseValidator from 'ember-cp-validations/validators/base';

const SumTotal = BaseValidator.extend({
  validate(/*value, options, model, attribute*/) {
    let calculatedTotal = parseInt(this.model.subtotalIva0) + parseInt(this.model.subtotalIva5) + parseInt(this.model.subtotalIva10); //sum subtotal in items
    if (calculatedTotal == this.model.total) {
      return true;
    } else {
      let message = "El total ingresado no es igual a la suma de los subtotales anteriores";
      return message;
    }
  }
});

SumTotal.reopenClass({
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

export default SumTotal;

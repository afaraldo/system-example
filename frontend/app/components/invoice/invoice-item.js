import Component from '@ember/component';
import { computed } from '@ember/object';
import { isBlank } from '@ember/utils';

export default Component.extend({
  taxes: [
    "10", "5", "0"
  ],
  selected: null,
  isCleaned: computed('model.invoice.items.@each', function() {
    return this.model.invoice.get('items').length == 1 ? false : true;
  }),
  actions: {
    addItem() {
      this.addE('invoice-item', 'items');
    },
    deleteItem() {
      this.deleteE(this.model);
    },
    updateSubtotal(item) {
      if (typeof item.quantity == 'undefined') {
        item.quantity = 0
      }
      if (typeof item.price == 'undefined') {
        item.price = 0
      }
      item.subtotal = item.quantity * item.price;
    },
    updatePrice(item) {
      if (typeof item.quantity == 'undefined') {
        item.quantity = 1
      }
      if (typeof item.price == 'undefined') {
        item.price = 0
      }
      item.price = item.subtotal / item.quantity
    },
    handleUpdate(val){
      this.set('selected', val);
      if(val && val.number){
        this.model.set('taxIVA', val);
      }
      else{
        this.model.set('taxIVA', undefined);
      }
    },
    autocompleteAfterSelection(event, invoice_item/*, dataset, context*/){
      let model = this.get('model');

      model.set('description', invoice_item.description);
      model.set('quantity', 1);
      model.set('taxIVA', invoice_item.taxIVA);
      return true;
    },
  },
});

import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    let order = null;
    if (params.order_id) {
      order = this.store.findRecord('order', params.order_id);
    }
    else {
      order = this.store.createRecord('order', {});
    }
    return order;

  }
});

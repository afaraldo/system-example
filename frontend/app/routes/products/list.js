import Route from '@ember/routing/route';

export default Route.extend({
  controllerName: 'products',

  model(){
    let products = this.store.query('product', {});

    return products;
  }
});

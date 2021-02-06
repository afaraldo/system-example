import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin,{

  model(){
    let invoice =  this.store.createRecord('invoice');

    invoice.type = "Sale";
    this.store.createRecord('invoice-item', {
      invoice: invoice
    });

    return invoice;
  },
});

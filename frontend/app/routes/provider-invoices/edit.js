import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default class ReportsInvoicesRoute extends Route.extend(AuthenticatedRouteMixin) {
  model(params){
    let invoice =  this.store.findRecord('invoice', params.provider_invoice_id)

    return invoice;
  }
}

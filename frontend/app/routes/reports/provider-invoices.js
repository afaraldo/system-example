import Route from '@ember/routing/route';
import {get} from '@ember/object';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';


export default class ReportsProviderInvoicesRoute extends Route.extend(AuthenticatedRouteMixin) {
  queryParams = {
    from: { refreshModel: true },
    to: { refreshModel: true },
    person_ids: { refreshModel: true },
    tag_ids: { refreshModel: true }
  };

  model(params){
    return this.store.query('reports/provider-invoice', {options: params}).catch(function(error){
      return [];
    });;
  }

}

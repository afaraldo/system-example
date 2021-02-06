import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';


export default class ReportsInvoicesRoute extends Route.extend(AuthenticatedRouteMixin) {
  queryParams = {
    from: { refreshModel: true },
    to: { refreshModel: true },
    person_ids: { refreshModel: true },
    tag_ids: { refreshModel: true }
  };

  model(params){
    return this.store.query('reports/invoice', {options: params}).catch(function(error){
      return [];
    });
  }

}

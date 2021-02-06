import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin,{
  model(){
    let invoices = this.store.query('invoice', {q: {type_eq: 'Sale'}});

    return invoices;
  }
});

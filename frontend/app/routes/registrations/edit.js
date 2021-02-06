import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin,{

  model(params){
    let registration = this.store.findRecord('registration', params.registration_id);
    return registration;
  }
});

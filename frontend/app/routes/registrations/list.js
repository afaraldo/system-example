import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin,{
  controllerName: 'registrations',

  model(){
    let registrations = this.store.query('registration', {});

    return registrations;
  }
});

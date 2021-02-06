import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin,{
  controllerName: 'movements',

  model(){
    let movements = this.store.query('movement', {});

    return movements;
  }
});

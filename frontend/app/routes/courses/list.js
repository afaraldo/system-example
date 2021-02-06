import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin,{
  controllerName: 'courses',

  model(){
    let courses = this.store.query('course', {});

    return courses;
  }
});

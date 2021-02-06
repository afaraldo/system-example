import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin,{

  model(){
    let student = this.store.createRecord('person');
    let registration = this.store.createRecord('registration', {
      student: student,
    });

    return registration;
  }
});

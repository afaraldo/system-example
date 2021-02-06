import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin,{
  model(){
    let course = this.store.createRecord('course', {});

    this.store.createRecord('course-concept', {
      course: course
    });

    this.store.createRecord('course-concept', {
      course: course
    });


    return course;
  }
});

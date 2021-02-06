import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    let movement = this.store.createRecord('movement', {});
    return movement;
  }
});

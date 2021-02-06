import Component from '@glimmer/component';
import {tracked} from "@glimmer/tracking";
import { inject as service } from '@ember/service';
import {action} from '@ember/object';

export default class PersonSelectComponent extends Component {
  @service store;
  @tracked people = null;
  @tracked selected = null;

  @action
  searchPerson(term){
    //this.selected = term;
    //let matches = [];
    //let regex = this.selected ?
    //  new RegExp(this.selected, 'i') :
    //  new RegExp('/S', 'i');

    this.people = this.store.query('person',{q: {name_cont: term}}).then(people =>{
      //return people.filter(item => {
      //  return regex.test(item.name) //|| regex.test(item.keywords);
      //});
      //this.tags = Ember.A(matches);
      //return Ember.A(matches);
      return people;
    });
    return this.people;
  }
}

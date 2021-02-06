import Component from '@glimmer/component';
import {tracked} from "@glimmer/tracking";
import { action, get  } from '@ember/object';
import { inject as service } from '@ember/service';

export default class TagSelectComponent extends Component {
  @service store;

  @tracked newItemName= null;
  @tracked tags= [];

  @action
  chooseTag(tag) {
    this.arg.selected.add(tag.id);
  }
  @action
  searchTags(term){
    this.newItemName = term;
    let matches = [];
    let regex = this.newItemName ?
      new RegExp(this.newItemName, 'i') :
      new RegExp('/S', 'i');

    return this.store.query('tag',{q: {name_cont: term}}).then(tags =>{
      return tags.filter(item => {
        return regex.test(item.name) //|| regex.test(item.keywords);
      });
      this.tags = Ember.A(matches);
      return Ember.A(matches);
    });
  }
}

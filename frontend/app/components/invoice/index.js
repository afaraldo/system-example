import Component from '@glimmer/component';
import { action, get  } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class InvoiceComponent extends Component {
  @service store;
  @service router;
  @service notifications;

  //tags
  @tracked newItemName= null;
  @tracked tags= [];

  @action
  add(){
    let element = this.store.createRecord('invoice-item', {});
    this.args.model.items.pushObject(element);
    return element;
  }

  @action
  deleteItem(item){
    this.args.model.items.removeObject(item);
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

  @action
  addNew(text){
    this.newItemName = text;

    let newTag = this.store.createRecord('tag',{
      name: text
    });
    newTag.save();

    this.tags.addObject(newTag);
    this.args.model.tags.addObject(newTag);
  }

  @action
  save(){
    let model = this.args.model;
    let notificationsService = this.notifications;
    let route = this.router;
    // hack to set computed attribute IVAtotal intro totalIVA
    model.totalIVA = this.args.model.IVAtotal;
    model.validate().then(
      ({ validations }) => {
        if (validations.get('isValid')) {
          model.save().then(function() {
            model.get('items').forEach(
              item => item.save().catch(function(reason) {
                notificationsService.danger(reason.errors || reason);
                throw reason;
              })
            );
            route.transitionTo('provider-invoices.edit', model);
            notificationsService.success('Guardado exitoso');
          }).catch(function(reason) {
            notificationsService.danger(reason.error || reason);
            return reason;
          });
        }
      });
    return model;
  }

  @action
  suggestionCustomized(person) {
    return `<p>${person.fullName} - <small>${person.documentNumber}</small></p>`;
  }

  @action
  autocompleteAfterPersonSelection(event, person/*, dataset, context*/){
    let model = this.args.model;
    this.store.query('invoice', {
      q: {
        person_id_eq: person.id,
        type_eq: model.type
      },
      pageSize: 1,
      page: 1
    }).then(function(invoices) {
      let invoice = invoices.get("firstObject");
      if (invoice) {
        model.stampingNumber = invoice.stampingNumber;
        model.stampingExpiry = invoice.stampingExpiry;
        model.number = invoice.number;
        model.condition = invoice.condition;
      }
    });
    model.name = person.fullName;
    model.ruc = person.documentNumber;
    model.person = person;
    $('[name="number"]').focus();
    return true;
  }

}

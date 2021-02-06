import Controller from '@ember/controller';
import CRUDMixin from "../../mixins/crudmixin";

export default Controller.extend(CRUDMixin,{
  actions:{
    search(name){
      // var aComment = this.get('store').createRecord('comment');
      // aComment.get('constructor.modelName') // => 'comment'
      return this.get('store').query('product', { q: {name_cont: name}})
    },
  }
});

import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  buttonLabel: computed(function() {
    //return this.get('model').isNew ? 'Inscribir' : 'Editar';
    return 'Registrar';
  }),
  store: service(),
  actions:{
    search(name){
      return this.searchAction(name)
    },
    submit(){
      this.submitAction();
    },
    addElement() {
      this.addAction();
    },
    deleteElement(element){
      this.deleteAction(element);
    },
    changeCourse(course) {
      if (!course) {
        this.set('course', null);
        return;
      }
      this.get('model').set('course', course.get('id'));
    }

  }

});

import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import CRUDMixin from "../mixins/crudmixin";

export default Component.extend(CRUDMixin, {
  course: null,
  store: service(),
  buttonLabel: computed(function() {
    //return this.get('model').isNew ? 'Inscribir' : 'Editar';
    return 'Inscribir';
  }),
  actions: {
    search(name) {
      return this.get('store').query('course', { q: {name_cont: name}})
    },
    submit(){
      this.submitAction();
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

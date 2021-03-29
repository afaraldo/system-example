import Route from '@ember/routing/route';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import { dom } from '@fortawesome/fontawesome-svg-core';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default Route.extend(ApplicationRouteMixin,{
  intl: service(),
  //moment: service(),
  beforeModel() {
    dom.watch();
    this._super(...arguments);
    return this.intl.setLocale(['es']);
  },

  @action
  error(error, transition) {
    if (error.status === '422') {
      console.log("Error 422")
    } else {
      // Let the route above this handle the error.
      return true;
    }
  }
});


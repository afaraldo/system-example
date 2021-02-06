import Route from '@ember/routing/route';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import { dom } from '@fortawesome/fontawesome-svg-core';
import { inject as service } from '@ember/service';

export default Route.extend(ApplicationRouteMixin,{
  intl: service(),
  //moment: service(),
  beforeModel() {
    dom.watch();
    this._super(...arguments);
    return this.intl.setLocale(['es']);
  },

});


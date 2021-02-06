import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service(),
  actions: {
    authenticate: function() {
      const credentials = this.getProperties('email', 'password');
      const authenticator = 'authenticator:jwt'; // or 'authenticator:jwt'

      this.get('session').authenticate(authenticator, credentials);
      if (this.get('session').isAuthenticated) {
        // What to do with all this success?
        console.log('Works');
        this.get('session').tenant = "organization_1";
      }
    }
  }
});

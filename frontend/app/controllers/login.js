
import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class LoginController extends Controller {
  //@tracked errorMessage;
  @service session;
  @service notifications;

  @action
  async authenticate(e) {
    let credential = this.getProperties('email', 'password');
    const authenticator = 'authenticator:jwt'; // or 'authenticator:jwt'
    try {
      await this.session.authenticate(authenticator, credential);
      if (this.get('session').isAuthenticated) {
        // What to do with all this success?
        console.log('Works');
        this.get('session').tenant = "organization_1";
      }
    } catch(error) {
      this.notifications.danger(error.text);
    }

    if (this.session.isAuthenticated) {
      this.notifications.success("Login");
    }
  }
}

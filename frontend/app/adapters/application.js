import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import DS from 'ember-data';
import ENV from "../config/environment";
import { underscore } from '@ember/string';
import { pluralize } from 'ember-inflector';
import { computed } from '@ember/object';
const { JSONAPIAdapter } = DS;
import TokenAuthorizerMixin from 'ember-simple-auth-token/mixins/token-authorizer';


export default JSONAPIAdapter.extend(TokenAuthorizerMixin,{
  namespace: 'api',
  host: ENV.host,
  pathForType(type) {
    let underscored = underscore(type);
    return pluralize(underscored);
  },
  headers: computed('session.data.authenticated.access_token', function() {
    let headers = {};
    if (this.session.isAuthenticated) {
      // OAuth 2
      headers['Authorization'] = `Bearer ${this.session.data.authenticated.jwt}`;
      headers["Organization"] = 'organization_1'
    }

    return headers;
  }),
});

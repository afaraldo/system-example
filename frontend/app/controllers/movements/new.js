import Controller from '@ember/controller';
import CRUDMixin from "../../mixins/crudmixin";
import { inject as service } from '@ember/service';

export default Controller.extend(CRUDMixin,{
  router: service()
});

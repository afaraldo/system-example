import { inject as service } from '@ember/service';
import ApplicationController from './application';

export default class ProviderInvoicesController extends ApplicationController {
  @service notifications;
  breadCrumb= 'Facturas';

}


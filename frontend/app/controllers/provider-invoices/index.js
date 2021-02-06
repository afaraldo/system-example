import ApplicationController from '../application';
import {action} from '@ember/object';

export default class ProviderInvoicesIndexController extends ApplicationController {
  breadCrumb = null;
  columns= [
    {
      title: "#",
      className: 'text-center align-middle'
    },
    {
      component: "formatted-date",
      propertyName: "date",
      title: "Fecha",
      className: 'text-center align-middle'
    },
    {
      propertyName: "name",
      title: "Razon social",
      className: 'text-center align-middle'
    },
    {
      propertyName: "ruc",
      title: "Ruc",
      className: 'text-center align-middle'
    },
    {
      propertyName: "number",
      title: "Numero",
      routeName: "provider-invoices.edit",
      className: 'text-center align-middle'
    },
    {
      propertyName: "conditionText",
      title: "Condicion",
      className: 'text-center align-middle'
    },
    {
      propertyName: "stampingNumber",
      title: "Timbrado",
      className: 'text-center align-middle'
    },
    {
      component: "formatted-date",
      propertyName: "stampingExpiry",
      title: "Vencimiento Timbrado",
      className: 'text-center align-middle'
    },
    {
      propertyName: "total",
      title: "Total",
      className: 'text-right align-middle'
    },
    {
      title: '',
      component: 'deleteRow',
      className: 'action-column'
    }
  ];

  @action
  deleteRecord(record) {
    record.destroyRecord();
  }
}

import ApplicationController from "../application";
import {action} from '@ember/object';

export default class InvoicesIndexController extends ApplicationController {
  breadCrumb = null;
  columns= [
    {
      title: "#",
      className: 'text-center align-middle'
    },
    {
      component: "formatted-date",
      title: "Fecha",
      className: 'text-center align-middle'
    },
    {
      propertyName: "name",
      title: "Razón social",
      className: 'text-left align-middle'
    },
    {
      propertyName: "ruc",
      title: "Ruc",
      className: 'text-center align-middle'
    },
    {
      propertyName: "number",
      title: "Numero",
      routeName: "invoices.edit",
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

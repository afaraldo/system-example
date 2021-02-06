import Controller from '@ember/controller';
import {action, set} from '@ember/object';
import { tracked } from '@glimmer/tracking';
import ApplicationController from "../application";

export default class ReportsInvoicesController extends ApplicationController {
  breadCrumb= 'RFGR';

  columns= [
    {
      title: "#",
      className: 'text-right'
    },
    {
      title: "Razon social",
      propertyName: "name",
      filteredBy: 'q[name_cont]',
      className: 'text-left'
    },
    {
      title: "Ruc",
      propertyName: "ruc",
      filteredBy: 'q[ruc_cont]',
      className: 'text-center'
    },
    {
      title: "Numero",
      propertyName: 'number',
      filteredBy: 'q[number_cont]',
      routeName: "provider-invoices.edit",
      className: 'text-center'
    },
    {
      title: "Fecha",
      propertyName: 'date',
      filteredBy: 'date',
      className: 'text-center',
      mayBeHidden: 'true',
    },
    {
      title: "Description",
      propertyName: 'description',
      className: 'text-left'
    },
    {
      title: "Cant",
      propertyName: 'quantity',
      className: 'text-right',
      disableFiltering: true
    },
    {
      title: "P.Unitario",
      propertyName: 'unit_price',
      className: 'text-right',
      disableFiltering: true
    },
    {
      title: "Total",
      propertyName: "total",
      className: 'text-right',
      disableFiltering: true
    },
    {
      title: "Etiqueta",
      propertyName: "tags",
      className: 'text-right'
    },
  ];

  @tracked from = moment();
  @tracked to = moment();
  @tracked person_ids = '*';
  @tracked tag_ids = '*';
  @tracked model;

  queryParams = ['from', 'to', 'person_ids', 'tag_ids'];

  @action
  displayAction(d) {
    this.columnFilters.forEach(c => {
      set(this, c, d.columnFilters[c]);
    });
  }
}

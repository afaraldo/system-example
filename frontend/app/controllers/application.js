import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { getOwner } from '@ember/application';
import { tracked } from "@glimmer/tracking";

export default class ApplicationController extends Controller {
  breadCrumb= "Principal";
  @service session;
  @tracked isLogin = true;


  themeInstance = getOwner(this).factoryFor('theme:ember-bootstrap-v4').create({
     searchLabelMsg: 'Buscar',
     columnsTitleMsg: 'Columnas',
     columnsShowAllMsg: 'Mostrar todo',
     columnsHideAllMsg: 'Ocultar todo',
     columnsRestoreDefaultsMsg: 'por defecto',
     tableSummaryMsg: 'Mostrando %@ - %@ de %@',
     allColumnsAreHiddenMsg: 'Ninguna columna visible',
     noDataToShowMsg: 'Sin datos',
     table: 'table datatable table-sm table-hover',
     input: 'form-control form-control-sm'
  });
}

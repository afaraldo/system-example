import Bootstrap4Theme from 'ember-models-table/themes/ember-bootstrap-v4';

/**
 * @class EmberBootstrap
 * @namespace Themes
 * @extends Themes.Bootstrap4
 */
export default Bootstrap4Theme.extend({
  // known error: Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties  ember/avoid-leaking-state-in-ember-objects
  components: {
      'columns-dropdown': 'models-table/themes/ember-bootstrap-v4/columns-dropdown',
      'global-filter': 'models-table/themes/ember-bootstrap-v4/global-filter',
      'row-filtering-cell': 'models-table/themes/ember-bootstrap-v4/row-filtering-cell',
      'data-group-by-select': 'models-table/themes/ember-bootstrap-v4/data-group-by-select',
      'summary': 'models-table/themes/ember-bootstrap-v4/summary',
  },

  searchLabelMsg: 'Buscar',
  tableSummaryMsg: 'Mostrando %@ - %@ de %@',

});

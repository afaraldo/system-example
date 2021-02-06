import Controller from '@ember/controller';

export default Controller.extend({
  init() {
    this._super(...arguments);
    this.columns= [
      {
        "propertyName": "id",
        "title": "ID"
      },
      {
        "propertyName": "description",
        "title": "Descripción"
      },
      {
        "propertyName": "date",
        "title": "Fecha",
        "component": "date-format"
      },
      {
        "propertyName": "amount",
        "title": "Monto"
      }
    ];
  }

});

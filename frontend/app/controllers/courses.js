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
        "propertyName": "name",
        "title": "Nombre"
      },
      {
        "propertyName": "start_date",
        "title": "Inicio"
      },
      {
        "propertyName": "end_date",
        "title": "Fin"
      }
    ];
  }

});

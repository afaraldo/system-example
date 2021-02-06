import Controller from '@ember/controller';

export default Controller.extend({
  init() {
    this._super(...arguments);
    this.columns= [
      {
        "propertyName": "number",
        "title": "Nro"
      },
      {
        "propertyName": "date",
        "title": "Fecha"
      },
      {
        "propertyName": "studentFullname",
        "title": "Estudiante"
      }
    ];
  }
});

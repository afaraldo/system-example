import Controller from '@ember/controller';

export default Controller.extend({
  init() {
    this._super(...arguments);
    this.columns= [
      {
        "propertyName": "code",
        "title": "#"
      },
      {
        "propertyName": "name",
        "title": "Servicio"
      },
      {
        "propertyName": "price",
        "title": "Precio"
      },
    ];
  }
});

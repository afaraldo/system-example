import Route from '@ember/routing/route';

export default Route.extend( {
  breadCrumb: 'Editar Factura',
  model(params){
    let invoice =  this.store.findRecord('invoice', params.invoice_id)

    return invoice;
  },
});

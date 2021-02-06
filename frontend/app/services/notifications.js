import Service from '@ember/service';
import { get } from '@ember/object';
import { inject as service } from '@ember/service';


export default Service.extend( {
  flashMessages: service('flash-messages'),

  success(message) {
    const flashMessages = get(this, 'flashMessages');
    flashMessages.success(message);
  },
  danger(message) {
    const flashMessages = get(this, 'flashMessages');
    //let msg = this.toSentence(this.full_messages(message));
    flashMessages.danger(message);
  },

  // Return a String converted to sentence ( a, b, c and f)
  toSentence(arr){
    return arr.slice(0, arr.length - 1).join(', ') + " y " + arr.slice(-1);
  },

  // Extract data from array of errors in format API JSON
  // { errors:
  //           { source: {pointer: "/data/attributes/attribute_name"}
  //             detail: "error message because throw the error"
  //           }
  // }
  // Finally create each error message concat each item between source/pointer and detail
  full_messages(arr){
    return arr.map(dicc => dicc['source']['pointer'].substring(17) + " " + dicc['detail']);
  }
});

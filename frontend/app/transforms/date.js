import Transform from '@ember-data/serializer/transform';
import moment from 'moment';
import { inject as service } from '@ember/service';

export default class DateTransform extends Transform {

  deserialize(serialized) {
    if (serialized) {
      return moment(serialized).toDate();
    }
    return serialized;
  }

  serialize(deserialized) {
    if (deserialized) {
      return moment(deserialized).format();
    }
    return deserialized;
  }
}

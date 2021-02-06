import Transform from '@ember-data/serializer/transform';

export default class UtcTransform extends Transform {
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

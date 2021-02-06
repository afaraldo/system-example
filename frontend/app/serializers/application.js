import { underscore } from '@ember/string';
import DS from "ember-data";

export default DS.JSONAPISerializer.extend(DS.EmbeddedRecordsMixin,{
  keyForAttribute(attr) {
    return underscore(attr);
  },
  normalizeArrayResponse(store, primaryModelClass, payload) {
   let result = this._super(...arguments);

   result.meta = result.meta || {};
   if (payload.links) {
     result.meta = {
       itemsCount: result.meta.items_total,
       pagesCount: result.meta.pages_total
     };
   }

   return result;
  }
});


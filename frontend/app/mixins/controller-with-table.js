import Mixin from '@ember/object/mixin';
import { getOwner } from '@ember/application';

export default Mixin.create({
  init() {
    this._super(...arguments);
  },
  // The property on meta to load the pages count from.
  metaPagesCountProperty: 'pagesCount',

  // The property on meta to load the total item count from.
  metaItemsCountProperty: 'itemsCount',

  // The time to wait until new data is actually loaded.
  // This can be tweaked to avoid making too many server requests.
  debounceDataLoadTime: 500,

  // The query parameters to use for server side filtering / querying.
  filterQueryParameters: {
    globalFilter: 'q',
    sort: 'sort',
    sortDirection: 'sortDirection',
    page: 'page',
    pageSize: 'pageSize'
  },
});

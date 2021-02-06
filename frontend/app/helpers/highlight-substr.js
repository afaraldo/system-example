import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/template';

//https://ember-power-select.com/docs/the-search/
export default helper(function highlightSubstr([text, termToHighlight]/*, hash*/) {
  return htmlSafe(text.replace(new RegExp(termToHighlight, 'i'), '<b>$&</b>')); // Warning. This is not XSS safe!
});

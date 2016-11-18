import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('simple-typeahead', 'Integration | Component | simple typeahead', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  this.render(hbs`{{simple-typeahead}}`);
  assert.equal(this.$().text().trim(), '');

});

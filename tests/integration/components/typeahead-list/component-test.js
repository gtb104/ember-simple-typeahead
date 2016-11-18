import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('typeahead-list', 'Integration | Component | typeahead list', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  this.render(hbs`{{typeahead-list}}`);
  assert.equal(this.$().text().trim(), '');
});

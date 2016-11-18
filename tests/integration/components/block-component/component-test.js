import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('block-component', 'Integration | Component | block component', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  this.render(hbs`{{block-component}}`);
  assert.equal(this.$().text().trim(), '');

  this.render(hbs`
    {{#block-component}}
      template block text
    {{/block-component}}
  `);
  assert.equal(this.$().text().trim(), 'template block text');
});

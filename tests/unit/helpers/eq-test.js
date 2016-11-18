
import { eq } from 'dummy/helpers/eq';
import { module, test } from 'qunit';

module('Unit | Helper | eq');

test('Truthy conditions are valid', function(assert) {
  const obj = {};

  assert.expect(4);

  assert.ok(eq([1, 1]), 'Number same');
  assert.ok(eq([true, true]), 'Boolean same');
  assert.ok(eq(['foo', 'foo']), 'String same');
  assert.ok(eq([obj, obj]), 'Object same');
});

test('Falsy conditions are invalid', function(assert) {
  const obj1 = {};
  const obj2 = {};

  assert.expect(5);

  assert.notOk(eq([0, 1]), 'Number different');
  assert.notOk(eq(['foo', 'bar']), 'String different');
  assert.notOk(eq([true, false]), 'Boolean different');
  assert.notOk(eq([obj1, obj2]), 'Object different');
  assert.notOk(eq([0, false]), 'Can not typecast');
});

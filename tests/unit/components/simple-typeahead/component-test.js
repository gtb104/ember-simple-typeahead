import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('simple-typeahead', 'Unit | Component | simple typeahead', {
  unit: true
});

test('forwardSelect increments selected index', function(assert) {
  // Creates the component instance
  const comp = this.subject();
  let idx = null;
  comp.items = [0,1,2];

  // move forward one
  comp.forwardSelect();
  idx = comp.selectionIdx;
  assert.equal(idx, 0, 'selection moves forward');

  // can select last item
  comp.selectionIdx = 1;
  comp.forwardSelect();
  idx = comp.selectionIdx;
  assert.equal(idx, 2, 'can select last item');

  // can't go beyond items length
  comp.selectionIdx = 2;
  comp.forwardSelect();
  idx = comp.selectionIdx;
  assert.equal(idx, 2, 'selection stays at last item');
});

test('backwardSelect decrements selected index', function(assert) {
  // Creates the component instance
  const comp = this.subject();
  let idx = null;
  comp.items = [0,1,2];

  // move back one
  comp.selectionIdx = 2;
  comp.backwardSelect();
  idx = comp.selectionIdx;
  assert.equal(idx, 1, 'selection moves backwards');

  // can select first item
  comp.selectionIdx = 1;
  comp.backwardSelect();
  idx = comp.selectionIdx;
  assert.equal(idx, 0, 'can select first item');

  // can move index back to -1
  comp.selectionIdx = 0;
  comp.backwardSelect();
  idx = comp.selectionIdx;
  assert.equal(idx, -1, 'selection is -1');
});

// test('onEnter calls supplied function passing selected item', function(assert) {
//   const comp = this.subject();
//   comp.items = [0,1,2];
//   comp.onItemEnter = function(item) {
//     return item;
//   };

//   // returns correct value
//   comp.selectionIdx = 2;
//   const item = comp.onEnter();
//   assert.ok(item, 2, 'Correct item returned');
// });

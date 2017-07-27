const test = require('tape');
const shot = require('shot');

test('Tape running', (t) => {
  console.log('ok');
  t.equal(2, 2, 'Tape is working');
  t.end();
});

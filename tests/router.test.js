const tape = require('tape');
const shot = require('shot');
const router = require('./../src/router');

tape('Tape running', (t) => {
  t.pass('Tape is working');
  t.end();
});

tape('Home route', (t) => {
  shot.inject(router, { method: 'get', url: '/' }, (res) => {
    t.equal(res.statusCode, 200, 'should respond with status code 200');
    t.end();
  })
});

tape('Search route', (t) => {
  shot.inject(router, { method: 'get', url: '/search' }, (res) => {
    t.equal(res.statusCode, 200, 'should respond with status code 200');
    t.end();
  })
});

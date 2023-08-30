var test = require('tape');
var match = require('./');

test('image/jpeg matches image/jpeg', function(t) {
  t.plan(1);
  t.ok(match('image/jpeg', 'image/jpeg'));
});

test('image/jpeg matches image/*', function(t) {
  t.plan(1);
  t.ok(match('image/jpeg', 'image/*'));
});

test('image/jpeg does not match application/pdf', function(t) {
  t.plan(1);
  t.notOk(match('image/jpeg', 'application/pdf'));
});

test('image/jpeg does not match application/*', function(t) {
  t.plan(1);
  t.notOk(match('image/jpeg', 'application/*'));
});

test('can filter out a match from an array of patterns', function(t) {
  t.plan(1);
  t.deepEquals(
    ['application/*', 'image/*'].filter(match('image/jpeg')),
    ['image/*']
  );
});

test('can use wildcards with suffix definitions', function(t) {
  t.plan(1);
  t.ok(match('application/atom+xml', 'application/*+xml'));
});

test('can use wildcards with vendor part', function(t) {
  t.plan(1);
  t.ok(match('audio/vnd.rn-realaudio', 'audio/vnd.*'));
});

test('charset suffix is ignored', function(t) {
  t.plan(1);
  t.ok(match('application/json', 'application/json; charset=utf-8'));
});

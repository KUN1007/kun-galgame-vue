var test = require('tape'),
    wildcard = require('../');

test('general wild card matching tests', function(t) {

    t.plan(6);
    t.ok(wildcard('foo.*', 'foo.bar'), 'foo.* should match foo.bar');
    t.ok(wildcard('foo.*', 'foo'), 'foo.* should match foo');
    t.notOk(wildcard('foo.*', 'bar'), 'foo.* should not match bar');
    t.ok(wildcard('a.*.c', 'a.b.c'), 'a.*.c should match a.b.c');
    t.notOk(wildcard('a.*.c', 'a.b'), 'a.*.c should not match a.b');
    t.notOk(wildcard('a', 'a.b.c'), 'a should not match a.b.c');
});

test('general wild card with separator matching tests', function(t) {

    t.plan(5);
    t.ok(wildcard('foo:*', 'foo:bar', ':'), 'foo:* should match foo:bar');
    t.ok(wildcard('foo:*', 'foo', ':'), 'foo:* should match foo');
    t.notOk(wildcard('foo:*', 'bar', ':'), 'foo:* should not match bar');
    t.ok(wildcard('a:*:c', 'a:b:c', ':'), 'a:*:c should match a:b:c');
    t.notOk(wildcard('a:*:c', 'a:b', ':'), 'a:*:c should not match a:b');
});

test('general wild card with tokens being returned', function(t) {

    t.plan(5);
    var parts = wildcard('foo.*', 'foo.bar');
    t.ok(parts);
    t.equal(parts.length, 2);
    t.equal(parts[0], 'foo');
    t.equal(parts[1], 'bar');

    parts = wildcard('foo.*', 'not.matching');
    t.notOk(parts);
});

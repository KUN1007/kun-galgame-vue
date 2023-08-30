# mime-match

A simple function to checker whether a target mime type matches a mime-type
pattern (e.g. image/jpeg matches image/jpeg OR image/*).


[![NPM](https://nodei.co/npm/mime-match.png)](https://nodei.co/npm/mime-match/)

[![Build Status](https://api.travis-ci.org/DamonOehlman/mime-match.svg?branch=master)](https://travis-ci.org/DamonOehlman/mime-match) [![bitHound Score](https://www.bithound.io/github/DamonOehlman/mime-match/badges/score.svg)](https://www.bithound.io/github/DamonOehlman/mime-match) 

## Example Usage

```js
var match = require('mime-match/');

// exact match
console.log(match('image/jpeg', 'image/jpeg'));
// --> true

// wildcard match
console.log(match('image/jpeg', 'image/*'));
// --> true

// find which of our wildcard patterns matches a specific mimetype
console.log(['application/*', 'image/*'].filter(match('image/jpeg')));
// --> ['image/*']

// charset suffix is ignored
console.log(match('application/json', 'application/json; charset=utf-8'));
// --> true

```

## License(s)

### ISC

Copyright (c) 2016, Damon Oehlman <damon.oehlman@gmail.com>

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.

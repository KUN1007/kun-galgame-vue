"use strict";

function has(object, key) {
  return Object.prototype.hasOwnProperty.call(object, key);
}

module.exports = has;
'use strict';
/**
 * This module serves as an Async wrapper for LocalStorage
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getItem = getItem;
exports.removeItem = removeItem;
exports.setItem = setItem;

function setItem(key, value) {
  return new Promise(resolve => {
    localStorage.setItem(key, value);
    resolve();
  });
}

function getItem(key) {
  return Promise.resolve(localStorage.getItem(key));
}

function removeItem(key) {
  return new Promise(resolve => {
    localStorage.removeItem(key);
    resolve();
  });
}
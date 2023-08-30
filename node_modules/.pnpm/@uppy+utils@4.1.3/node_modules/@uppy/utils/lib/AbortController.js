"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAbortError = exports.AbortSignal = exports.AbortController = void 0;

/**
 * Little AbortController proxy module so we can swap out the implementation easily later.
 */
const {
  AbortController
} = globalThis;
exports.AbortController = AbortController;
const {
  AbortSignal
} = globalThis;
exports.AbortSignal = AbortSignal;

const createAbortError = function (message) {
  if (message === void 0) {
    message = 'Aborted';
  }

  return new DOMException(message, 'AbortError');
};

exports.createAbortError = createAbortError;
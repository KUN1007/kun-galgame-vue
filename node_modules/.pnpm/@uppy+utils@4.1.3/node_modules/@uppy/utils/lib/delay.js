"use strict";

var _AbortController = require("./AbortController.js");

function delay(ms, opts) {
  return new Promise((resolve, reject) => {
    var _opts$signal, _opts$signal2;

    if (opts != null && (_opts$signal = opts.signal) != null && _opts$signal.aborted) {
      return reject((0, _AbortController.createAbortError)());
    }

    const timeout = setTimeout(() => {
      cleanup(); // eslint-disable-line no-use-before-define

      resolve();
    }, ms);

    function onabort() {
      clearTimeout(timeout);
      cleanup(); // eslint-disable-line no-use-before-define

      reject((0, _AbortController.createAbortError)());
    }

    opts == null ? void 0 : (_opts$signal2 = opts.signal) == null ? void 0 : _opts$signal2.addEventListener('abort', onabort);

    function cleanup() {
      var _opts$signal3;

      opts == null ? void 0 : (_opts$signal3 = opts.signal) == null ? void 0 : _opts$signal3.removeEventListener('abort', onabort);
    }

    return undefined;
  });
}

/**
 * Return a Promise that resolves after `ms` milliseconds.
 *
 * @param {number} ms - Number of milliseconds to wait.
 * @param {{ signal?: AbortSignal }} [opts] - An abort signal that can be used to cancel the delay early.
 * @returns {Promise<void>} A Promise that resolves after the given amount of `ms`.
 */
module.exports = delay;
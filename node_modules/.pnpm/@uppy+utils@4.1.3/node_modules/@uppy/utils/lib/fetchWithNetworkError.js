"use strict";

const NetworkError = require("./NetworkError.js");
/**
 * Wrapper around window.fetch that throws a NetworkError when appropriate
 */


function fetchWithNetworkError() {
  return fetch(...arguments).catch(err => {
    if (err.name === 'AbortError') {
      throw err;
    } else {
      throw new NetworkError(err);
    }
  });
}

module.exports = fetchWithNetworkError;
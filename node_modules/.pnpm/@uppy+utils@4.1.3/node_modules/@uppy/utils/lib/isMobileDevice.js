"use strict";

function isMobileDevice() {
  if (typeof window !== 'undefined' && window.navigator && window.navigator.userAgent && window.navigator.userAgent.match(/Mobi/)) {
    return true;
  }

  return false;
}

/**
 * Checks if current device reports itself as “mobile”.
 * Very simple, not very reliable.
 *
 * @returns {boolean}
 */
module.exports = isMobileDevice;
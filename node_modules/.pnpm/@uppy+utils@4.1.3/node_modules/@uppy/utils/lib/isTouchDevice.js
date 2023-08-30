"use strict";

function isTouchDevice() {
  return 'ontouchstart' in window || 'maxTouchPoints' in navigator;
}

module.exports = isTouchDevice;
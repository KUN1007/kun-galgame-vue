"use strict";

const toArray = require("../../toArray.js"); // .files fallback, should be implemented in any browser


function fallbackApi(dataTransfer) {
  const files = toArray(dataTransfer.files);
  return Promise.resolve(files);
}

module.exports = fallbackApi;
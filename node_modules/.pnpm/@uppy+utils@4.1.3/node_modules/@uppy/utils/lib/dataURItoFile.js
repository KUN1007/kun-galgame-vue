"use strict";

const dataURItoBlob = require("./dataURItoBlob.js");

function dataURItoFile(dataURI, opts) {
  return dataURItoBlob(dataURI, opts, true);
}

module.exports = dataURItoFile;
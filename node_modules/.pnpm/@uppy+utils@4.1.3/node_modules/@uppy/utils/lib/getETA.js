"use strict";

const getSpeed = require("./getSpeed.js");

const getBytesRemaining = require("./getBytesRemaining.js");

function getETA(fileProgress) {
  if (!fileProgress.bytesUploaded) return 0;
  const uploadSpeed = getSpeed(fileProgress);
  const bytesRemaining = getBytesRemaining(fileProgress);
  const secondsRemaining = Math.round(bytesRemaining / uploadSpeed * 10) / 10;
  return secondsRemaining;
}

module.exports = getETA;
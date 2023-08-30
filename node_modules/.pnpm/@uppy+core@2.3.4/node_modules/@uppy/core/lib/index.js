"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Uppy = exports.UIPlugin = exports.BasePlugin = void 0;
Object.defineProperty(exports, "debugLogger", {
  enumerable: true,
  get: function () {
    return _loggers.debugLogger;
  }
});

var _loggers = require("./loggers.js");

module.exports = require('./Uppy.js');

const _0 = require("./UIPlugin.js");

exports.UIPlugin = _0;

const _1 = require("./BasePlugin.js");

exports.BasePlugin = _1;

// TODO: remove all the following in the next major

/* eslint-disable import/first */
const Uppy = require("./Uppy.js");

exports.Uppy = Uppy;

const UIPlugin = require("./UIPlugin.js");

const BasePlugin = require("./BasePlugin.js");

// Backward compatibility: we want those to keep being accessible as static
// properties of `Uppy` to avoid a breaking change.
Uppy.Uppy = Uppy;
Uppy.UIPlugin = UIPlugin;
Uppy.BasePlugin = BasePlugin;
Uppy.debugLogger = _loggers.debugLogger;
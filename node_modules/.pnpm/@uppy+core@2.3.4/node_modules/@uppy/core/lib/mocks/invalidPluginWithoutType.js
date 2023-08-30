"use strict";

const UIPlugin = require("../UIPlugin.js");

class InvalidPluginWithoutType extends UIPlugin {
  constructor(uppy, opts) {
    super(uppy, opts);
    this.id = 'InvalidPluginWithoutType';
    this.name = this.constructor.name;
  }

  run(results) {
    this.uppy.log({
      class: this.constructor.name,
      method: 'run',
      results
    });
    return Promise.resolve('success');
  }

}

module.exports = InvalidPluginWithoutType;
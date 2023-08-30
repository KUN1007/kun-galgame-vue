"use strict";

var _globals = require("@jest/globals");

// eslint-disable-line import/no-extraneous-dependencies
const UIPlugin = require("../UIPlugin.js");

class TestSelector2 extends UIPlugin {
  constructor(uppy, opts) {
    super(uppy, opts);
    this.type = 'acquirer';
    this.id = 'TestSelector2';
    this.name = this.constructor.name;
    this.mocks = {
      run: _globals.jest.fn(),
      update: _globals.jest.fn(),
      uninstall: _globals.jest.fn()
    };
  }

  run(results) {
    this.uppy.log({
      class: this.constructor.name,
      method: 'run',
      results
    });
    this.mocks.run(results);
    return Promise.resolve('success');
  }

  update(state) {
    this.mocks.update(state);
  }

  uninstall() {
    this.mocks.uninstall();
  }

}

module.exports = TestSelector2;
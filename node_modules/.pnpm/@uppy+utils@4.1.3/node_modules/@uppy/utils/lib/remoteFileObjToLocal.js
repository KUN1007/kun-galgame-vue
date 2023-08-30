"use strict";

const getFileNameAndExtension = require("./getFileNameAndExtension.js");

function remoteFileObjToLocal(file) {
  return { ...file,
    type: file.mimeType,
    extension: file.name ? getFileNameAndExtension(file.name).extension : null
  };
}

module.exports = remoteFileObjToLocal;
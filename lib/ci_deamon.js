#!/usr/bin/env node

var gitModule = (function(path) {
  'use strict';

  const fs = require('fs'),
    exec = require('child_process').exec,
    assert = require('assert').ok;

  const assertDirectory = function(dir) {
    assert(typeof dir === 'string');
    let parseDir = dir.split(' ');
    assert(parseDir.length === 1);
  };

  const executeStatusCall = function(dir) {
    assertDirectory(dir);
    exec("git status -s " + dir, function(err, stdout, stderr) {
      let files = stdout.split('\n');
      let fileNames=  files.map(function(item) {
        var splited= item.split(" ");
        return splited[splited.length - 1];
      });
      if(fileNames.length>1){
        console.log("you have " + (fileNames.length -1) + " files changed" );
      }
    });
  }

  return {
    executeStatusCall: executeStatusCall
  }

})();

module.exports = gitModule;

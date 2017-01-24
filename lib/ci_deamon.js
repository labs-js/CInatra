'use strict';

const fs = require('fs'),
  exec = require('child_process').exec,
  assert = require('assert').ok;

module.exports = executeStatusCall;

function assertDirectory(dir) {
  assert(typeof dir === 'string');
  let parseDir = dir.split(' ');
  assert(parseDir.length === 1);
};

function executeStatusCall(dir) {
  assertDirectory(dir);
  exec("git status -s " + dir, function(err, stdout, stderr) {
    let files = stdout.split('\n');
    let fileNames = files.map(function(item) {
      var splited = item.split(" ");
      return splited[splited.length - 1];
    });
    if (fileNames.length > 1) {
      console.log("you have " + (fileNames.length - 1) + " files changed");
    }
  });
}

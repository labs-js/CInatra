const fs = require('fs');
const exec = require('child_process').exec;
const assert = require('assert').ok;

var checkGitFiles = function(dir) {
    assert(typeof dir ==='string');
    var parseDir = dir.split(' ');
    assert(parseDir.length === 1);
    //FIX: dir should not contain any command.
    exec("git status " + dir, function(err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
    });
};

checkGitFiles("./")

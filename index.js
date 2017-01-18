#!/usr/bin/env node

module.exports = function () {
    require('./lib/ci_deamon');
}

var t = require("./lib/ci_deamon");
t.executeStatusCall('./');

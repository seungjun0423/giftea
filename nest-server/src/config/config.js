"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var yaml = require("js-yaml");
var path_1 = require("path");
var YAML_CONFIG_PROD = 'production.yaml';
var YAML_CONFIG_DEV = 'development.yaml';
exports["default"] = (function () {
    return yaml.load((process.env.NODE_ENV === 'production') ?
        (0, fs_1.readFileSync)((0, path_1.join)(__dirname, YAML_CONFIG_PROD), 'utf8')
        : (0, fs_1.readFileSync)((0, path_1.join)(__dirname, YAML_CONFIG_DEV), 'utf8'));
});

"use strict";

var fs        = require("fs");
var path      = require("path");
var Sequelize = require("sequelize");
var basename  = path.basename(module.filename);
var env       = process.env.NODE_ENV || "development";
var config    = require(path.join('..','config', 'config.json'))[env];
var sequelize = new Sequelize(config.database, config.username, config.password, config);

var db = {
  sequelize: sequelize,
  Sequelize: Sequelize,
  models: {}
};

fs
  .readdirSync(path.join(__dirname + "/models"))
  .filter(function filterHidden(file) {
    return (file.indexOf(".") !== 0);
  })
  .forEach(function importModels(file) {
    var model = sequelize["import"](path.join(__dirname, "/models", file));
    db.models[model.name] = model;
  });

Object.keys(db.models).forEach(function associateModels(modelName) {
  if ("associate" in db.models[modelName]) {
    db.models[modelName].associate(db.models);
  }
});

module.exports = db;

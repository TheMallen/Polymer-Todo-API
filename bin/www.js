#!/usr/bin/env node

var app = require('../app');
var db = require("../db");

app.set('port', process.env.PORT || 3000);

// sync the db schema with the app schema
db.sequelize.sync()
  .then(function () {
    
    // then start the server
    var server = app.listen(app.get('port'), function() {
      console.log('Server listening on port ' + server.address().port);
    });
  });
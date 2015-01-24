
"use strict";

module.exports = {
  create: {
    fetch: function(req, res, context) {
      // manipulate the fetch call
      context.continue();
    }
  },
  list: {
    write: {
      before: function(req, res, context) {
        // modify data before writing list data
        context.continue();
      },
      action: function(req, res, context) {
        // change behavior of actually writing the data
        context.continue();
      },
      after: function(req, res, context) {
        // set some sort of flag after writing list data
        context.continue();
      }
    }
  }
};


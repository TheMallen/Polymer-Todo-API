"use strict";
/*
  This is a sample middleware. It can be added to a resource to specify that it is immutable (cannot be updated or deleted).
*/
module.exports = {
  delete: {
    auth: function(req, res, context) {
      res.json(403, { error: "sorry, this resource is immutable" });
      context.stop();
    }
  },
  update: {
    auth: function(req, res, context) {
      res.json(403, { error: "sorry, this resource is immutable" });
      context.stop();
    }
  }
};

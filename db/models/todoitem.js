module.exports = function (sequelize, DataTypes) {
  var TodoItem = sequelize.define("TodoItem", {
    description
  }, {
    classMethods: {
      associate: function (models) {
      }
    }
  });
  return TodoItem;
}
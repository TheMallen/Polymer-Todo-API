module.exports = function (sequelize, DataTypes) {
  var TodoItem = sequelize.define("Spot", {
    description
  }, {
    classMethods: {
      associate: function (models) {
      }
    }
  });
  return TodoItem;
}
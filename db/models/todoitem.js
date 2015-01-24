module.exports = function (sequelize, DataTypes) {
  var TodoItem = sequelize.define("TodoItem", {
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    classMethods: {
      associate: function (models) {
      }
    }
  });
  return TodoItem;
}
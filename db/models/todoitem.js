module.exports = function (sequelize, DataTypes) {
  var TodoItem = sequelize.define("TodoItem", {
    text: DataTypes.STRING,
    isDone: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false }
  }, {
    classMethods: {
      associate: function (models) {
      }
    }
  });
  return TodoItem;
}
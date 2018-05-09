module.exports = function (sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    // Giving the Author model a name of type STRING
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });



  return Burger;
};
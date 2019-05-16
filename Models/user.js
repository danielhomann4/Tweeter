module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define("User", {
      // Giving the Author model a name of type STRING
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      userName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING
    });
  
    return User;
  };
  
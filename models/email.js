module.exports = function(sequelize, DataTypes) {
    var Email = sequelize.define("Email", {
      From: DataTypes.STRING,
      Subject: DataTypes.STRING,
      To: DataTypes.String,
      Body: DataTypes.TEXT,
      SendDate: Datatype.DATE
    });
    return Email;
  };
module.exports = function(sequelize, DataTypes) {
    var Email = sequelize.define("Email", {
      From: DataTypes.STRING,
      Subject: DataTypes.STRING,
      To: DataTypes.STRING,
      Cc: DataTypes.STRING(1234),
      Bcc: DataTypes.STRING(1234),
      Body: DataTypes.TEXT,
      SendDate: DataTypes.DATE
    });
    return Email;
  };
"use strict";
module.exports = (sequelize, DataTypes) => {
  const Campus = sequelize.define(
    "Campus",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      imageUrl: {
        type: DataTypes.STRING,
        defaultValue: "https://svgshare.com/i/DdH.svg"
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT
      }
    },
    {}
  );
  Campus.associate = function(models) {
    // associations can be defined here
  };
  return Campus;
};

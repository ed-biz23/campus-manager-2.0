"use strict";
module.exports = (sequelize, DataTypes) => {
  const Campuses = sequelize.define(
    "Campuses",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Please enter campus name." },
          notNull: { msg: "Please enter campus name." }
        }
      },
      image_url: {
        type: DataTypes.TEXT,
        defaultValue: "https://svgshare.com/i/DdH.svg"
      },
      address: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Please enter campus address." },
          notNull: { msg: "Please enter campus address." }
        }
      },
      description: {
        type: DataTypes.TEXT,
        defaultValue: null
      }
    },
    {
      underscored: true,
      freezeTableName: true
    }
  );
  Campuses.associate = models => {
    // associations can be defined here
    Campuses.hasMany(models.Students, {
      as: "students",
      foreignKey: "campus_id"
    });
  };
  return Campuses;
};

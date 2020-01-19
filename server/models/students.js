"use strict";
module.exports = (sequelize, DataTypes) => {
  const Students = sequelize.define(
    "Students",
    {
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Please enter first name." },
          notNull: { msg: "Please enter first name." }
        }
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Please enter last name." },
          notNull: { msg: "Please enter last name." }
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: { msg: "Please enter valid email." },
          notNull: { msg: "Must provide an email." }
        }
      },
      image_url: {
        type: DataTypes.TEXT,
        defaultValue: "https://svgshare.com/i/Ddq.svg"
      },
      gpa: {
        type: DataTypes.DECIMAL(10, 2),
        defaultValue: null,
        validate: {
          min: {
            args: 0,
            msg: "GPA cannot be below 0.0"
          },
          max: {
            args: 4,
            msg: "GPA cannot be above 4.0"
          }
        }
      }
    },
    {
      underscored: true,
      freezeTableName: true
    }
  );
  Students.associate = models => {
    // associations can be defined here
    Students.belongsTo(models.Campuses, {
      as: "campus",
      foreignKey: "campus_id",
      onDelete: "SET NULL",
      onUpdate: "CASCADE"
    });
  };
  return Students;
};

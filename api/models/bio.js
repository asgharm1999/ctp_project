'use strict';
const { Model } = require('sequelize');
const User = require('../models').User;


module.exports = (sequelize, DataTypes) => {
  class Bio extends Model {}

  Bio.init({
    message: { 
      type: DataTypes.STRING,
      allowNull: false 
    },
    recommendation: { type: DataTypes.STRING },
    traveledTo: { 
      type: DataTypes.STRING
    },
    wishListCities: { type: DataTypes.STRING },
  }, {
    sequelize,
    modelName: 'bio'
  });

  Bio.associate = (models) => {
    // associations can be defined here
    models.Bio.belongsTo(models.User);
  };

  return Bio;
};
const {Sequelize, sequelize, dataTypes, Model} = require('../db');

// TODO - define the Band model
let Band;
Band = sequelize.define('band', {
    name : Sequelize.STRING,
    genre : Sequelize.STRING
});

module.exports = {
    Band
};
const {Sequelize, sequelize, dataTypes, Model} = require('../db');

// TODO - define the Musician model
let Musician;
Musician = sequelize.define('musician', {
    name : Sequelize.STRING,
    instrument : Sequelize.STRING
});

module.exports = {
    Musician
};
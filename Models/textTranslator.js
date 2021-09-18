const Sequelize = require("sequelize");

const sequelize = require('../dbconnection');
const textTranslation = sequelize.define('translationdb', {
    textTrnaslationId : {
        type : Sequelize.INTEGER,
        primaryKey : true,
        allowNull : false,
        autoIncrement : true
    },
    toLanguage : {
        type : Sequelize.STRING,
        allowNull : false

    },
    fromLanguage : {
        type : Sequelize.STRING,
        allowNull : false

    },
    textInput : {
        type : Sequelize.STRING,
        allowNull : false
    },
    translatedText : {
        type : Sequelize.STRING,
        allowNull : false
    },
    createdAt :{
        type : Sequelize.DATEONLY,
        allowNull : false,
        defaultValue : new Date()

    } ,
    updatedAt : {
        type : Sequelize.DATEONLY,
        allowNull : false,
        defaultValue : new Date()
    }

});

module.exports = textTranslation;
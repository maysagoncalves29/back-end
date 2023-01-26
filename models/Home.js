const Sequelize = require('sequelize');
const db = require('./db');

const Home = db.define('homes', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

Home.sync();
//Criar a tabela no BD
//Home.sync();

//Verificar se há alguma diferença na tabela, realiza a alteração
//Home.sync({ alter: true });

//Primeiro apaga a TB, em seguida cria TB
//Home.sync({ force: true })

module.exports = Home;
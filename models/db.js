const Sequelize = require('sequelize');

const sequelize = new Sequelize('newevents', 'root', 'MalignoDiabo', {
    host: "localhost",
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
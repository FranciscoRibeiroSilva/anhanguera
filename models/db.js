const Sequelize = require('sequelize');

const sequelize = new Sequelize('d3pr69okcj3ggc', 'njzlodwwxigbyx', '19df1b2b8ea8aaf7a5df356c188fb6dd0168c73bc23b825d85875435da411ae0', {
    host: "ec2-107-21-255-181.compute-1.amazonaws.com",
    dialect: 'postgres'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
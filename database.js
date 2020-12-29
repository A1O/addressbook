const { Sequelize } = require('sequelize');
console.log(`db_password: ${process.env.DB_PASSWORD} db_ssl: ${process.env.DB_SSL}`)
const sequelize = new Sequelize(process.env.DB_SCHEMA || 'postgress',
    process.env.DB_USER || 'postgres',
    process.env.DB_PASSWORD || '',
    {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 5432,
        dialect: 'postgres',
        dialectOptions: {}
    }
);

/* 

        ssl: {
            require: process.env.DB_SSL,
            rejectUnauthorized: false
        }

*/

const Person = sequelize.define('Person', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: true
    }
})

module.exports = {
    sequelize: sequelize,
    Person: Person
}
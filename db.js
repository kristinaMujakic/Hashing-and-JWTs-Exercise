/** Database connection for messagely. */

const { Client } = require("pg");
const { DB_URI } = require("./config");

const client = new Client(DB_URI);


client.connect()
    .then(() => {
        console.log('Connected to the PostgreSQL database');
    })
    .catch((error) => {
        //  throw new Error('SASL: SCRAM-SERVER-FIRST-MESSAGE: client password must be a string')
        console.error('Error connecting to the database:', error.message);
    });

module.exports = client;

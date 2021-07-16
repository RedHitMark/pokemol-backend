const Mongoose = require('mongoose');

const username = process.env.MONGO_USER || "";
const password = process.env.MONGO_PASSWORD || "";
const host = process.env.MONGO_HOST || "mongo-db";
const port = process.env.MONGO_PORT || 27017;
const dbname = process.env.MONGO_DATABASE || "db";
const authSource = "admin"


let connectionString = 'mongodb://' +
    username + ':' +
    password + '@' +
    host + ':' + port + '/' +
    dbname + '?authSource=' +
    authSource;

const mongoOptions = {useNewUrlParser: true, useUnifiedTopology: true };

/**
 * DB Connection
 */
Mongoose.connect(connectionString, mongoOptions);

/**
 * DB Connection error handling
 */
Mongoose.connection.on('error', (err) => {
    if (err) {
        throw err;
    }
});

Mongoose.Promise = global.Promise;

/**
 * Export of DB Connection and collections schemas
 */
module.exports = {
    Mongoose, models: {
        team: require('./schemas/team'),
        pokemon: require('./schemas/pokemon')
    }
};

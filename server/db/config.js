const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";
const dbName = "re0-mongo";

const client = new MongoClient(uri);

module.exports = { client, dbName, default: client };

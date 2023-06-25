const { MongoClient } = require('mongodb');

const connectionString = "mongodb+srv://Starbuck:YiMyCBewb9A3YiAt5nwnrUFQIMV6Oc4r@starbuckcoffe.kqs07gt.mongodb.net/?retryWrites=true&w=majority";

let db = null;

const mongoConnect = async () => {
    const client = new MongoClient(connectionString);

    try {
        const database = client.db('Starbuck')
        db = database;
        return database;
    } catch (error) {
        await client.close();
    }
}

const getDatabase = () => db;

module.exports = {
    mongoConnect,
    getDatabase
};


const {
    MongoClient,
    ServerApiVersion
} = require('mongodb');

const db_username = process.env.MONGO_USERNAME;
const db_url = process.env.MONGO_URL;
// Accessing DB_URL
const db_passwd = process.env.MONGO_PASSWORD;
const uri = `mongodb+srv://${db_username}:${db_passwd}@${db_url}`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

const connectDb = async() => {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

export default connectDb;
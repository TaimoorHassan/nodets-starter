
import * as mongodb from 'mongodb';
import { MongoClient } from 'mongodb';


const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myproject';

// Use connect method to connect to the server
mongodb.connect(url).then(async (x) => {
    console.log("DB started");

    // x is the DB Client. we get db from there
    let db = x.db("simpleDB");

    // from db we get collections
    let col = db.collection("simple");

    // we add data to collection this way
    await col.insertOne({ "name": "Jamal" });

    // this is simple query. finds all docs
    let allDocs = await col.find({}).toArray();

    // & this is just printing
    console.log(allDocs);
});



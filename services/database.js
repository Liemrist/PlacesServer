import mongoose from "mongoose";


const dbName = 'Places';
const dbUrl = 'mongodb43610-krabsburger.mycloud.by';
const username = 'naruto';
const password = 'uzumaki';

const options = {
    server: {reconnectInterval: 5000},
    user: username,
    pass: password
};

mongoose.connect(`mongodb://${dbUrl}${dbName}`, options);

const db = mongoose.connection;

db.once('open', () => console.log(`${timeLog()} ${dbName} database connection opened`));
db.on('error', console.error.bind(console, 'connection error:'));
db.on('reconnected', () => console.log(`${timeLog()} ${dbName} database reconnected`));
db.on('disconnected', () => console.log(`${timeLog()} ${dbName} database disconnected`));

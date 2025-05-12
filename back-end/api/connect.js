// JavaScript Assincrono
// await - (espera isso acontecer para me retornar isso)  | async 
// Fullfilled - promessa cumprida

import { MongoClient } from "mongodb";

const URI = "mongodb+srv://raideri:MegaR4yqu4z40384@cluster0.1oydjaj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotifyAula");

// const songCollection = await db.collection('songs').find({}).toArray();
// console.log(songCollection);


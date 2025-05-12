// JavaScript Assincrono
// await - (espera isso acontecer para me retornar isso)  | async 
// Fullfilled - promessa cumprida

import { MongoClient } from "mongodb";
import dotenv from "dotenv"

dotenv.config();

const URI = process.env.MONGODB_URI;

const client = new MongoClient(URI);

export const db = client.db("spotifyAula");

// const songCollection = await db.collection('songs').find({}).toArray();
// console.log(songCollection);


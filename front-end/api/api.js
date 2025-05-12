// Fetch (nativo) ou Axios (package)

// npm i dotenv

import axios from "axios";

// const {NODE_ENV} = process.env;

const URL =  "https://deploy-jornada-full-stack-yckq.onrender.com/api"; 

const responseArtists = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;
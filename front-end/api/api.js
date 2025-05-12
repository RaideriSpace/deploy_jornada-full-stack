// Fetch (nativo) ou Axios (package)
import axios from "axios";

const URL = "http://localhost:3050";

const responseArtists = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;
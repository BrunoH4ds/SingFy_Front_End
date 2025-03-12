// Fetch ou Axios
import axios from "axios";

const URL = "http://localhost:3001";

const responseArtists = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);
const responseGender = await axios.get(`${URL}/gender`);

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;
export const genderArray = responseGender.data;
//console.log(responseArtists.data);

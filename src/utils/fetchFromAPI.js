import axios from "axios";

const BASE_URL = "https://exercisedb.p.rapidapi.com/exercises/bodyPartList";

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": process.env.React_App_RAPID_API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}${url}`, options);
  return data;
};

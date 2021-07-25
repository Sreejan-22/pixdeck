require("dotenv").config();

const baseURL = "https://api.unsplash.com";
const API_KEY = process.env.REACT_APP_PEXEL_API_KEY;

async function fetchImages() {
  const response = await fetch(`${baseURL}/photos?per_page=28`, {
    method: "GET",
    headers: {
      Authorization: `Client-ID ${API_KEY}`,
    },
  });

  const data = await response.json();
  return data;
}

export default fetchImages;

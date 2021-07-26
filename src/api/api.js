require("dotenv").config();

const baseURL = "https://api.unsplash.com";
const API_KEY = process.env.REACT_APP_PEXEL_API_KEY;

export async function fetchImages(pageNumber) {
  const response = await fetch(
    `${baseURL}/photos?page=${pageNumber}&per_page=24`,
    {
      method: "GET",
      headers: {
        Authorization: `Client-ID ${API_KEY}`,
      },
    }
  );

  const data = await response.json();
  return data;
}

export async function searchImages(searchQuery, pageNumber) {
  const response = await fetch(
    `${baseURL}/search/photos?${new URLSearchParams({
      query: searchQuery,
      page: pageNumber,
      per_page: 24,
    })}`,
    {
      method: "GET",
      headers: {
        Authorization: `Client-ID ${API_KEY}`,
      },
    }
  );

  const data = await response.json();
  return data.results;
}

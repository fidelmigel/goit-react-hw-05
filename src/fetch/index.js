import axios from "axios";

const BASE_URL = "https://api.themoviedb.org";
const API_READ_ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTc0YTQ5MjBhN2MzYjc4MjJhZDFiZjkyNWZhMDk3NiIsIm5iZiI6MTczMTA3NTkzMC43ODQsInN1YiI6IjY3MmUxZjVhODk4ZDE4ZTY5MDk2MjU4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.osfi7tr2mtdGltJ64Oq8KTwyRD1bjuOXRVXz-crSt3I";
const options = {
  headers: {
    Authorization: `Bearer ${API_READ_ACCESS_TOKEN}`,
  },
};

export const fetchMoviesByQuery = async (query = "") => {
  try {
    const response = await axios.get(`${BASE_URL}/3/search/movie`, {
      params: { query },
      headers: {
        Authorization: `Bearer ${API_READ_ACCESS_TOKEN}`,
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchTrendingMovies = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}//3/trending/movie/day?language=en-US`,
      options
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieById = async (id = 0) => {
  try {
    const response = await axios.get(`${BASE_URL}/3/movie/${id}`, options);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieCast = async (id = 0) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/3/movie/${id}/credits`,
      options
    );

    return response.data;
  } catch (error) {
    console.log("fetchMovieCast error", error);
  }
};

export const fetchMovieReviews = async (id = 0) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/3/movie/${id}/reviews`,
      options
    );

    return response.data;
  } catch (error) {
    console.log("fetchMovieCast error", error);
  }
};

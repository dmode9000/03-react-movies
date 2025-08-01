import axios from "axios";
import type { Movie } from "../types/movie";

interface ApiSearchResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export const API_TOKEN = import.meta.env.VITE_TMDB_TOKEN;

axios.defaults.baseURL = "https://api.themoviedb.org/3/search/";
axios.defaults.headers.common["Authorization"] = "Bearer " + API_TOKEN;

export async function fetchMovies(query: string): Promise<ApiSearchResponse> {
  const response = await axios.get(`movie?query=${query}`);
  return response.data;
}

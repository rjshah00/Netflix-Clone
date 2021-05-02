const API_KEY = "7b0b4daba3c3145cff8f0ecfb4ec0914";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/movie?api_key=${API_KEY}&language=en-US&page=1&with_companies=420|19551|38679|2301|13252`,
  fetchToprated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchTvMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;

// https://api.themoviedb.org/3/discover/movie?api_key=7b0b4daba3c3145cff8f0ecfb4ec0914&with_genres=10749
//

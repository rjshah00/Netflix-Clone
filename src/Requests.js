const API_KEY = "7b0b4daba3c3145cff8f0ecfb4ec0914";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=123`,
  fetchToprated: `/discover/top_rated/all/week?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_generes=28`,
  fetchComedyMovies: `/discover/movie?primary_release_year=2010&sort_by=vote_average.desc`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_generes=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_generes=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_generes=99`,
};

export default requests;

// /discover/movie?api_key=7b0b4daba3c3145cff8f0ecfb4ec0914&with_genres=27

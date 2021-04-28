export interface MovieListResponse {
  movies: Movie[];
  lastPage: number;
}

export interface Movie {
  id: number;
  original_title: string;
  overview: string;
  popularity: any;
  title: string;
  genre_ids: number[];
  backdrop_path: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
  genres: Genre[];
  budget: number;
  production_companies: Company[];
}

export interface Genre {
  id: number;
  name: string;
}

export interface Company {
  id: number;
  name: string;
  logo_path: string;
  origin_country: string;
}

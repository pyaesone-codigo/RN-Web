import {createAsyncAction} from 'typesafe-actions';

import {Movie, MovieListResponse} from './models/Movie';

import {ErrorModel} from '../../models/ErrorModel';

import {Credits} from './models/Credits';

export const fetchPopularMoviesAsync = createAsyncAction(
  'FETCH_POPULAR_MOVIES_REQUEST',
  'SUCCESS_POPULAR_MOVIES_REQUEST',
  'FAIL_POPULAR_MOVIES_REQUEST',
  'CANCEL_POPULAR_MOVIES_REQUEST',
)<number, MovieListResponse, ErrorModel, undefined>();

export const fetchNowPlayingMoviesAsync = createAsyncAction(
  'FETCH_NOW_PLAYING_MOVIES_REQUEST',
  'SUCCESS_NOW_PLAYING_MOVIES_REQUEST',
  'FAIL_NOW_PLAYING_MOVIES_REQUEST',
  'CANCEL_NOW_PLAYING_MOVIES_REQUEST',
)<number, MovieListResponse, ErrorModel, undefined>();

export const fetchTopRatedMoviesAsync = createAsyncAction(
  'FETCH_TOP_RATED_MOVIES_REQUEST',
  'SUCCESS_TOP_RATED_MOVIES_REQUEST',
  'FAIL_TOP_RATED_MOVIES_REQUEST',
  'CANCEL_TOP_RATED_MOVIES_REQUEST',
)<number, MovieListResponse, ErrorModel, undefined>();

export const fetchUpComingMoviesAsync = createAsyncAction(
  'FETCH_UP_COMING_MOVIES_REQUEST',
  'SUCCESS_UP_COMING_MOVIES_REQUEST',
  'FAIL_TUP_COMING_MOVIES_REQUEST',
  'CANCEL_TUP_COMING_MOVIES_REQUEST',
)<number, MovieListResponse, ErrorModel, undefined>();

export const fetchMovieDetailAsync = createAsyncAction(
  'FETCH_MOVIE_DETAIL_REQUEST',
  'SUCCESS_MOVIE_DETAIL_REQUEST',
  'FAIL_MOVIE_DETAIL_REQUEST',
  'CANCEL_MOVIE_DETAIL_REQUEST',
)<number, Movie, ErrorModel, undefined>();

export const fetchMovieDetailCreditAsync = createAsyncAction(
  'FETCH_MOVIE_DETAIL_CREDIT_REQUEST',
  'SUCCESS_MOVIE_DETAIL_CREDIT_REQUEST',
  'FAIL_MOVIE_DETAIL_CREDIT_REQUEST',
  'CANCEL_MOVIE_DETAIL_CREDIT_REQUEST',
)<number, Credits, ErrorModel, undefined>();

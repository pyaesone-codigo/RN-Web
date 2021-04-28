import React, {useEffect} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {BaseNavigationProps, navigate, RouteName} from '../navigation';
import * as actions from '../features/movie/actions';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {RootState} from 'typesafe-actions';
import {connect} from 'react-redux';
import {Label, Loader} from '../components/index';
import MovieList from '../features/movie/components/MovieList';
import {COLORS} from '../utils/UI';

const mapStateToProps = (state: RootState) => ({
  isLoading: state.movie.isLoadingTodos,
  popularMovie: state.movie.popularMovies,
  nowPlayingMovie: state.movie.nowPlayingMovies,
  topRatedMovie: state.movie.topRatedMovies,
  upComingMovie: state.movie.upComingMovies,
});
const dispatchProps = {
  fetchPopularMovies: actions.fetchPopularMoviesAsync.request,
  fetchNowPlayingMovies: actions.fetchNowPlayingMoviesAsync.request,
  fetchTopRatedMovies: actions.fetchTopRatedMoviesAsync.request,
  fetchUpComingMovies: actions.fetchUpComingMoviesAsync.request,
};
type Props = ReturnType<typeof mapStateToProps> &
  typeof dispatchProps &
  BaseNavigationProps;

const HomePage = (props: Props) => {
  console.log(props.isLoading);

  useEffect(() => {
    props.fetchPopularMovies(1);
    props.fetchNowPlayingMovies(1);
    props.fetchTopRatedMovies(1);
    props.fetchUpComingMovies(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const category = [
    {
      title: 'Top Rated Movies',
      movies: props.topRatedMovie?.movies ?? [],
    },
    {
      title: 'Now Playing Movies',
      movies: props.nowPlayingMovie?.movies ?? [],
    },
    {
      title: 'Popular Movies',
      movies: props.nowPlayingMovie?.movies ?? [],
    },
    {
      title: 'UpComing Movies',
      movies: props.upComingMovie?.movies ?? [],
    },
  ];

  return (
    <Loader loading={props.isLoading}>
      <View style={styles.container}>
        <Label
          isBold={true}
          text={'Movie'}
          style={{
            color: COLORS.RED,
            alignSelf: 'center',
            textAlign: 'center',
            fontSize: 38,
            paddingBottom: 24,
          }}
        />
        <FlatList
          data={category}
          renderItem={({index, item}) => (
            <MovieList
              onItemPressed={movie => {
                navigate(props, RouteName.DetailPage, movie);
              }}
              title={item.title}
              movies={item.movies}
              index={index}
            />
          )}
        />
      </View>
    </Loader>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'black',
  },
});

export default connect(mapStateToProps, dispatchProps)(HomePage);

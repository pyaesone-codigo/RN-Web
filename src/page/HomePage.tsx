import React, {useEffect} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {BaseNavigationProps, navigate} from '../navigation';
import * as actions from '../features/movie/actions';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {RootState} from 'typesafe-actions';
import {connect} from 'react-redux';

const mapStateToProps = (state: RootState) => ({
  isLoading: state.movie.isLoadingTodos,
});
const dispatchProps = {
  fetchPopularMovies: actions.fetchPopularMoviesAsync.request,
};
type Props = ReturnType<typeof mapStateToProps> &
  typeof dispatchProps &
  BaseNavigationProps;

const HomePage = (props: Props) => {
  console.log(props.isLoading);

  useEffect(() => {
    console.log('hello');
    props.fetchPopularMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <Text>Home Page</Text>
      <Text>IS Loading {props.isLoading.toString()}</Text>
      <Button title={'Go Detail'} onPress={() => navigate(props)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default connect(mapStateToProps, dispatchProps)(HomePage);

import React, {useEffect} from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {BaseNavigationProps, goBack} from '../navigation';
import {Config} from '../config';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Movie} from '../features/movie/models/Movie';
import {IS_WEB} from '../utils/UI';
import {Label, Loader} from '../components';
import * as actions from '../features/movie/actions';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {RootState} from 'typesafe-actions';
import {connect} from 'react-redux';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Credits} from '../features/movie/models/Credits';
import Cast from '../features/movie/components/Cast';
import Genre from '../features/movie/components/Genre';
import Company from '../features/movie/components/Company';
import moment from 'moment';

const mapStateToProps = (state: RootState) => ({
  isLoading: state.movie.isLoadingTodos,
  movie: state.movie.movieDetail,
  credits: state.movie.movieDetailCredits,
});
const dispatchProps = {
  fetchMovieDetail: actions.fetchMovieDetailAsync.request,
  fetchMovieDetailCredit: actions.fetchMovieDetailCreditAsync.request,
  clearMovieDetail: actions.fetchMovieDetailAsync.cancel,
  clearCredit: actions.fetchMovieDetailCreditAsync.cancel,
};
type Props = ReturnType<typeof mapStateToProps> &
  typeof dispatchProps &
  BaseNavigationProps;

const DetailPage = (props: Props) => {
  // @ts-ignore
  const movieParams = IS_WEB
    ? // @ts-ignore
      (props.location.state?.param as Movie)
    : (props.route.params?.param as Movie);

  useEffect(() => {
    props.fetchMovieDetail(movieParams.id);
    props.fetchMovieDetailCredit(movieParams.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(
    () => () => {
      console.log('unmount');
      props.clearMovieDetail();
      props.clearCredit();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const movie = props.movie;
  const credit = props.credits;

  return (
    <Loader loading={props.isLoading}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        {props.movie && credit ? (
          <View style={styles.container}>
            <ImageBackground
              source={{
                uri: `${Config.IMAGE_PATH}${movie?.backdrop_path}`,
              }}
              resizeMode={'stretch'}
              style={styles.backdrop}
              blurRadius={9}
            />
            <View
              style={[IS_WEB ? styles.webContainer : styles.mobileContainer]}>
              <Image
                style={[IS_WEB ? styles.webPoster : styles.mobilePoster]}
                source={{
                  uri: `${Config.IMAGE_PATH}${movie?.poster_path}`,
                }}
              />
              {Detail(movie!, credit!)}
            </View>
          </View>
        ) : null}
      </ScrollView>
      <TouchableOpacity style={styles.backArrow} onPress={() => goBack(props)}>
        <Image
          source={require('../images/back_arrow.png')}
          style={{
            height: 24,
            width: 24,
          }}
        />
      </TouchableOpacity>
    </Loader>
  );
};

const Detail = (movie: Movie, credit: Credits) => {
  return (
    <View style={styles.detail}>
      <View style={{flexDirection: 'row'}}>
        <Label
          text={movie.title}
          isBold={true}
          style={{color: 'white', flexGrow: 1}}
        />
        <Label text={movie.vote_average.toString()} style={{color: 'white'}} />
      </View>
      <Label
        text={`Release date - ${moment(movie.release_date).format(
          'MMM DD YYYY',
        )}`}
        style={styles.date}
      />
      <Label
        text={movie.overview}
        style={{color: 'white', paddingVertical: 16}}
      />

      <Genre genres={movie.genres} />
      <Company company={movie.production_companies} />
      <Cast cast={credit.cast} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 38,
    backgroundColor: 'black',
  },
  webPoster: {
    width: 200,
    height: 300,
  },

  mobilePoster: {
    width: 200,
    height: 300,
    alignSelf: 'center',
    marginBottom: 16,
  },

  webContainer: {
    flexDirection: 'row',
    maxWidth: '80%',
    alignSelf: 'center',
  },

  mobileContainer: {
    flexDirection: 'column',
  },

  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    right: 0,
    bottom: 0,
  },

  detail: {
    paddingHorizontal: 24,
    flex: 1,
  },
  date: {
    fontSize: 11,
    color: 'gray',
  },

  backArrow: {
    height: 24,
    width: 24,
    position: 'absolute',
    top: 16,
    left: 16,
  },
});
export default connect(mapStateToProps, dispatchProps)(DetailPage);

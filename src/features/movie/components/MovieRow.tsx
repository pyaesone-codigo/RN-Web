import React from 'react';

import {Movie} from '../models/Movie';
import {Image, Platform, StyleSheet} from 'react-native';
import {Config} from '../../../config';
import {CardView, Label} from '../../../components';
import moment from 'moment';
// import {WIDTH} from '../../../utils/UI';
// @ts-ignore
interface Props {
  movie: Movie;
  index: number;
  onItemPressed: (movie: Movie) => void;
}

const MovieRow = (props: Props) => {
  const {movie, index, onItemPressed} = props;
  return (
    <CardView
      onPress={() => onItemPressed(movie)}
      style={[
        styles.container,
        Platform.OS === 'web'
          ? {
              height: 350,
            }
          : {height: 290, width: 150},
        index > 0
          ? {
              marginHorizontal: 16,
            }
          : {marginHorizontal: 0},
      ]}>
      <Image
        resizeMode={'cover'}
        style={styles.image}
        source={{
          uri: `${Config.IMAGE_PATH}${movie.poster_path}`,
        }}
      />
      <Label text={movie.title} style={styles.title} />
      <Label text={movie.vote_average.toString()} style={styles.vote} />
      <Label
        text={`Release date - ${moment(movie.release_date).format(
          'MMM DD YYYY',
        )}`}
        style={styles.date}
      />
    </CardView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOpacity: 1,
    alignSelf: 'stretch',
    marginVertical: 16,
    marginHorizontal: 16,
    backgroundColor: 'black',
  },
  image: {
    flex: 1,
  },
  title: {
    paddingTop: 8,
    color: 'white',
  },

  vote: {
    color: 'green',
  },

  date: {
    color: 'gray',
    fontSize: 10,
  },
});

export default MovieRow;

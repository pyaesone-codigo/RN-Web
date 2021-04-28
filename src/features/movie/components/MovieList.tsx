import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Movie} from '../models/Movie';
import MovieRow from './MovieRow';
import {Label} from '../../../components';
import {COLORS} from '../../../utils/UI';

interface Props {
  movies: Movie[];
  title: string;
  index: number;
  onItemPressed: (movie: Movie) => void;
}

const MovieList = (props: Props) => {
  const {title, index, movies} = props;

  return (
    <View
      style={[
        index > 0
          ? {
              marginVertical: 16,
            }
          : {},
      ]}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View
          style={{
            height: 50,
            width: 10,
            backgroundColor: COLORS.RED,
            marginEnd: 15,
          }}
        />
        <Label text={title} isBold={true} style={styles.title} />
      </View>
      <FlatList
        horizontal={true}
        data={movies}
        renderItem={({index, item}) => (
          <MovieRow
            onItemPressed={props.onItemPressed}
            movie={item}
            index={index}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: '#db014d',
  },
});

export default MovieList;

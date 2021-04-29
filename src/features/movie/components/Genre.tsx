import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import {Genre as GenreModel} from '../models/Movie';
import {Label} from '../../../components';

interface Props {
  genres: GenreModel[];
}

const Genre = (props: Props) => {
  return (
    <View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={props.genres}
        renderItem={({index, item}) => {
          return (
            <View
              style={[
                styles.container,
                index > 0 ? {marginHorizontal: 16} : {},
              ]}>
              <Label style={{fontSize: 11, color: 'white'}} text={item.name} />
            </View>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderRadius: 16,
    backgroundColor: 'black',
  },
});

export default Genre;

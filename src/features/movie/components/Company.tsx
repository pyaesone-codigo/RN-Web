import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import {Company as CompanyModel} from '../models/Movie';
import {Label} from '../../../components';

interface Props {
  company: CompanyModel[];
}

const Company = (props: Props) => {
  return (
    <View>
      <Label
        text={'Production Companies'}
        style={{color: 'white', paddingVertical: 16}}
      />
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={props.company}
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

export default Company;

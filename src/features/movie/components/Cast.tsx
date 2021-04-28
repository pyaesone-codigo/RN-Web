import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Cast as CastModel} from '../models/Credits';
import {FlatList, Image, View} from 'react-native';
import {Label} from '../../../components';
import {Config} from '../../../config';

interface Props {
  cast: CastModel[];
}
const Cast = (props: Props) => {
  const {cast} = props;
  return (
    <View style={{marginVertical: 16}}>
      <Label text={'Casts '} isBold={true} style={{color: 'white'}} />
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={cast}
        showsVerticalScrollIndicator={false}
        renderItem={({index, item}) => {
          return (
            <View
              style={[
                {marginTop: 16},
                index > 0 ? {marginHorizontal: 16} : {},
              ]}>
              <Image
                style={{height: 100, width: 100, borderRadius: 50}}
                source={{
                  uri: `${Config.IMAGE_PATH}${item.profile_path}`,
                }}
              />
              <Label
                style={{
                  textAlign: 'center',
                  color: 'white',
                  paddingVertical: 16,
                }}
                text={item.name}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

export default Cast;

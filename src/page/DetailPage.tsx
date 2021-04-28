import React from 'react';
import {Text, View} from 'react-native';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {BaseNavigationProps} from '../navigation';
type Props = BaseNavigationProps;
const DetailPage = (props: Props) => {
  console.log(props);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>DetailPage</Text>
    </View>
  );
};

export default DetailPage;

import React from 'react';
import {Button, Text, View} from 'react-native';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {BaseNavigationProps, navigate} from '../navigation';

type Props = BaseNavigationProps;

const HomePage = (props?: Props) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home Page</Text>
      <Button title={'Go Detail'} onPress={() => navigate(props)} />
    </View>
  );
};

export default HomePage;

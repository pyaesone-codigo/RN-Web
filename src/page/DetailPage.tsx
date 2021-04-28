import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {BaseNavigationProps} from '../navigation';
type Props = BaseNavigationProps;
const DetailPage = (props: Props) => {
  console.log(props);
  return (
    <View style={styles.container}>
      <Text>DetailPage</Text>
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
export default DetailPage;

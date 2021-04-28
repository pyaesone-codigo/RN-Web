import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

interface Props {
  children: React.ReactNode;
  loading: boolean;
}
const Loader = (props: Props) => {
  return (
    <View style={styles.container}>
      {props.children}
      {props.loading ? (
        <View style={styles.loading}>
          <ActivityIndicator color={'white'} style={{}} />
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loading: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    left: 0,
  },
});

export default Loader;

import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {
  StyleSheet,
  TouchableOpacity,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  TouchableOpacityProps,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ViewStyle,
} from 'react-native';

interface Props extends TouchableOpacityProps {
  children: React.ReactNode;
  style?: ViewStyle | ViewStyle[];
  onPress: () => void;
}

const CardView = (props: Props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles.container, props.style]}>
      {props.children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default CardView;

import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Platform, Text, TextStyle} from 'react-native';

interface Props {
  style?: TextStyle;
  isBold?: boolean;
  text: string;
}

const Label = (props: Props) => {
  const isBold = props.isBold ? 'bold' : 'normal';
  return (
    <Text
      style={[
        props.style,
        Platform.OS === 'web'
          ? {
              fontWeight: isBold,
            }
          : {
              fontFamily: props.isBold ? 'Poppins-Bold' : 'Poppins-Regular',
            },
      ]}>
      {props.text}
    </Text>
  );
};

export default Label;

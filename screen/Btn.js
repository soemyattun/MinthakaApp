import {Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Btn({btnLabel, containerStyle, textStyle, onPress}) {
  return (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        borderRadius: 100,
        height: 40,
        paddingVertical: 10,
        marginTop: 20,

        ...containerStyle,
      }}
      onPress={() => onPress()}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          ...textStyle,
        }}>
        {btnLabel}
      </Text>
    </TouchableOpacity>
  );
}

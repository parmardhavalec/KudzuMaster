import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const CustomButton = (props) => {
  return (
    <View style={styles.backgroundColor}>
      <TouchableOpacity onPress={() => props.onPress()}>
        <Text style={styles.textStyle}>{props.label}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundColor: {
    backgroundColor: 'blue',
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    margin: 10,
  },
  textStyle: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CustomButton;

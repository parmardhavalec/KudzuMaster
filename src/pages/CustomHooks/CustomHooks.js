import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { color } from 'react-native-reanimated';

const CustomHooksExample = ({label}) => {
  const [score, changeName] = useState(1);

  const onPress = () => {
    changeName(score + 1);
  };

  const onPress1 = () => {
    changeName(score - 1);
  };

  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Text style={{color:'red'}}>{label}</Text>

      <TouchableOpacity onPress={() => onPress()}>
        <Text>Add</Text>
      </TouchableOpacity>

      <Text>{score}</Text>

      <TouchableOpacity onPress={() => onPress1()}>
        <Text>Sub</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomHooksExample;

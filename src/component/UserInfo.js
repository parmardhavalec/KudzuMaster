import React from 'react';
import {View, Text} from 'react-native';

const UserInfo = ({country, peopleCount}) => {
  return (
    <View>
      <Text>{country}</Text>
      
      <Text>People Liked: {peopleCount}</Text>
    </View>
  );
};

export default UserInfo;

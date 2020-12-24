import React from 'react';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {selectTheme} from './action/action';
import * as actiontypes from './action/actiontypes';

class HomeScreen extends React.Component {
  themeSelected = (color) => {
    this.props.selectTheme(color);
  };
  render() {
    return (
      <View
        style={{
          alignItems: 'center',
          height: '100%',
          justifyContent: 'center',
        }}>
        <View>
          <Text>Pick Themes</Text>
          <TouchableOpacity onPress={() => this.themeSelected('red')}>
            <Text style={{padding: 10, alignSelf: 'center'}}>Red</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.themeSelected('green')}>
            <Text style={{padding: 10, alignSelf: 'center'}}>Green</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.themeSelected('black')}>
            <Text style={{padding: 10, alignSelf: 'center'}}> Black</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={{padding: 10, alignSelf: 'center', fontSize: 30}}>
            Go To
          </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('ScreenA')}>
            <Text style={{padding: 10, alignSelf: 'center'}}>Screen A</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('ScreenB')}>
            <Text style={{padding: 10, alignSelf: 'center'}}>Screen B</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  //selectTheme: () => dispatch({type: actiontypes.COLOR_SELECTED}),
  selectTheme: (color) => dispatch(selectTheme(color)),
});

const mapStateToProps = (state) => {
  const test = state;

  return {
    data: '',
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

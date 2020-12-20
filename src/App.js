import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import UserInfo from './component/UserInfo';
import CustomButton from './component/CustomButton';

class App extends React.Component {
  constructor(props) {
    super(props);

    //creating state
    this.state = {
      country: 'India',
      peopleCount: '',
    };
    this.state = {
      country: 'India',
      peopleCountUSA: '',
    };
  }

  sweetPressed = () => {
    this.setState({peopleCount: '60% people like Sweet'});
  };

  sourPressed = () => {
    this.setState({peopleCount: '40% people like Sour'});
  };

  sweetPressedUSA = () => {
    this.setState({peopleCountUSA: '30% people like Sweet'});
  };

  sourPressedUSA = () => {
    this.setState({peopleCountUSA: '70% people like Sweet'});
  };

  render() {
    return (
      <SafeAreaView>
        <View style={{alignItems: 'center'}}>
          <UserInfo country={'India'} peopleCount={this.state.peopleCount} /> 
          <CustomButton onPress={this.sweetPressed} label={'Sweet'} />
          <CustomButton onPress={this.sourPressed} label={'Sour'} />
        </View>
        <View style={{alignItems: 'center'}}>
          <UserInfo country={'USA'} peopleCount={this.state.peopleCountUSA} /> 
          <CustomButton onPress={this.sweetPressedUSA} label={'Sweet'} />
          <CustomButton onPress={this.sourPressedUSA} label={'Sour'} />
        </View>
      </SafeAreaView>
    );
  }
}

export default App;

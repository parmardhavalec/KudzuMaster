import React from 'react';
import {View, Text, Dimensions, TouchableOpacity, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {scoreTeamA} from './action/action';
import * as actiontypes from './action/actiontypes';
import CustomHooks from '../CustomHooks/CustomHooks'

class HomeScreen extends React.Component {
  
  totalScoreTeamA = (score) => {
    this.props.scoreTeamA(score);
  };
  totalScoreTeamB = (score) => {
    this.props.scoreTeamB(score);
  };
  render() {
    return (
      <View
        style={{
          alignItems: 'center',
          height: '100%',
          justifyContent: 'center',
        }}>
          <CustomHooks label="TEAM A"/>
          <CustomHooks label="TEAM B"/>
          <TouchableOpacity
        onPress={() => this.props.navigation.navigate('WinnerScreen')}
        style={styles.loginBtn}>
        <Text style={styles.loginText}>SCORE CARD</Text>
      </TouchableOpacity>
        {/* <View>
          <Text>TEAM A</Text>
          <TouchableOpacity onPress={() => this.totalScoreTeamA(score+1)}>
            <Text style={{padding: 10, alignSelf: 'center'}}>Add</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{padding: 10, alignSelf: 'center'}}>TESTA</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.totalScoreTeamA(score-1)}>
            <Text style={{padding: 10, alignSelf: 'center'}}> Sub</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text>TEAM B</Text>
          <TouchableOpacity onPress={() => this.totalScoreTeamB(score+1)}>
            <Text style={{padding: 10, alignSelf: 'center'}}>Add</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{padding: 10, alignSelf: 'center'}}>TESTB</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.totalScoreTeamB(score-1)}>
            <Text style={{padding: 10, alignSelf: 'center'}}> Sub</Text>
          </TouchableOpacity>
        </View> */}

        {/* <View>
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
        </View> */}
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  //selectTheme: () => dispatch({type: actiontypes.COLOR_SELECTED}),
  scoreTeamA: (score) => dispatch(scoreTeamA(score)),
  scoreTeamB: (score) => dispatch(scoreTeamB(score)),
});

const mapStateToProps = (state) => {
  const test = state;

  return {
    data: '',
  };
};


const styles = StyleSheet.create({
  loginBtn: {
    width: '80%',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

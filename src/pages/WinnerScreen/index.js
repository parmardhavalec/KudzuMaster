import React from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';

class WinnerScreen extends React.Component {
  colorSelcted = (score) => {
    if (score === 'green') {
      return 'green';
    } else if (score === 'red') {
      return 'red';
    } else if (score === 'black') {
      return 'black';
    } else {
      return 'blue';
    }
  };

  render() {
    const score = this.props.score;
    return (
      <View style={{backgroundColor: this.colorSelcted(score), height: '100%'}}>
        <Text></Text>
      </View>
    );
  }
}

const mapStateToProps = ({reducer}) => {
  return {
    score: reducer.colorSelected,
  };
};

export default connect(mapStateToProps)(WinnerScreen);

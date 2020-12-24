import React from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';

class ScreenA extends React.Component {
  colorSelcted = (color) => {
    if (color === 'green') {
      return 'green';
    } else if (color === 'red') {
      return 'red';
    } else if (color === 'black') {
      return 'black';
    } else {
      return 'white';
    }
  };

  render() {
    const color = this.props.color;
    return (
      <View style={{backgroundColor: this.colorSelcted(color), height: '100%'}}>
        <Text></Text>
      </View>
    );
  }
}

const mapStateToProps = ({reducer}) => {
  return {
    color: reducer.colorSelected,
  };
};

export default connect(mapStateToProps)(ScreenA);

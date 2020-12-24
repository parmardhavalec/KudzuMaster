import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

class ScreenB extends React.Component {
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
export default connect(mapStateToProps)(ScreenB);

/* eslint-disable prettier/prettier */
import React, { Component } from 'react';

import { View, Text } from 'react-native';

class SecondPage extends Component {
  static navigationOptions = {
    title: 'Segunda pagina',
  };

  render() {
    return (
      <View>
        <Text>SecondPage</Text>
      </View>
    );
  }
}

export default SecondPage;

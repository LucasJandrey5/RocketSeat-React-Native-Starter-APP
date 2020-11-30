/* eslint-disable prettier/prettier */
import React from 'react';

import {WebView} from 'react-native-webview';

const product = ({navigation}) => (
  <WebView source={{uri: navigation.state.params.product.url}} />
);

product.navigationOptions = ({navigation}) => ({
  title: navigation.state.params.product.title,
});

export default product;


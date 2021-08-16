import * as React from 'react';
import {View, StyleSheet, Text} from 'react-native';
const ScreenB = ({navigation}) => {
  return (
    <View style={styles.input}>
      <Text style={styles.input}>Welcome to profile screen !</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '30%',
  },
});

export default ScreenB;

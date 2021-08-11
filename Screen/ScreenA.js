import * as React from 'react';
import {View, StyleSheet, Button} from 'react-native';
const ScreenA = ({navigation}) => {
  const OnpressHandler = () => {
    navigation.navigate('Screen_B');
  };
  return (
    <View style={styles.input}>
      <Button
        style={styles.input}
        title="GO TO SCREEN B"
        onPress={OnpressHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '50%',
  },
});

export default ScreenA;

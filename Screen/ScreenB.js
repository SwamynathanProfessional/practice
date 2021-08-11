import * as React from 'react';
import {View, StyleSheet, Button} from 'react-native';
const ScreenB = ({navigation}) => {
  const OnpressHandler = () => {
    navigation.navigate('Screen_A');
  };
  return (
    <View style={styles.input}>
      <Button
        style={styles.input}
        title="GO TO SCREEN A"
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

export default ScreenB;

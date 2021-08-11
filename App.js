import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ScreenA from './Screen/ScreenA';
import ScreenB from './Screen/ScreenB';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const Stack = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, size, color}) => {
            let iconName;
            if (route.name === 'Screen_A') {
              iconName = 'autoprefixer';
              size = focused ? 55 : 50;
              color = focused ? '#f0f' : '#555';
            } else if (route.name === 'Screen_B') {
              iconName = 'btc';
              size = focused ? 55 : 50;
              color = focused ? '#f0f' : '#555';
            }
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
          activeTintColor: '#f0f',
          inactiveTintColor: '#555',
          activeBackgroundColor: '#fff',
          inactiveBackgroundColor: '#999',
          showLabel: true,
          labelStyle: {fontSize: 14},
        })}>
        <Stack.Screen
          name="Screen_A"
          component={ScreenA}
          options={{tabBarBadge: 3}}
        />

        <Stack.Screen
          name="Screen_B"
          component={ScreenB}
          options={{tabBarBadge: 3}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

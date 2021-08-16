import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import ScreenA from './Screen/ScreenA';
import ScreenB from './Screen/ScreenB';
import ScreenC from './Screen/ScreenC';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const Stack = createMaterialBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Screen_A"
        activeColor="#ffd700"
        inactiveColor="#fff"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, size, color}) => {
            let iconName;
            if (route.name === 'Screen_A') {
              iconName = 'map-marker-alt';
              size = focused ? 25 : 18;
              color = focused ? '#ff6347' : '#fff';
            } else if (route.name === 'Screen_B') {
              iconName = 'user-alt';
              size = focused ? 25 : 18;
              color = focused ? '#ff6347' : '#fff';
            } else if (route.name === 'Screen_C') {
              iconName = 'home';
              size = focused ? 25 : 18;
              color = focused ? '#ff6347' : '#fff';
            }
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
<<<<<<< HEAD

          showLabel: true,
          labelStyle: {fontSize: 24},
        })}>
        <Stack.Screen
          name="Screen_A"
          component={ScreenA}
          options={{
            tabBarLabel: 'Location',
          }}
        />

=======
         
          showLabel: true,
          labelStyle: {fontSize: 24},
        })}>
        <Stack.Screen
          name="Screen_A"
          component={ScreenA}
          options={{
            tabBarLabel: 'Location',
          }}
        />

>>>>>>> bottom-tab-navigator
        <Stack.Screen
          name="Screen_B"
          component={ScreenB}
          options={{
            tabBarLabel: 'MyAccount',
          }}
        />

        <Stack.Screen
          name="Screen_C"
          component={ScreenC}
          options={{
            tabBarLabel: 'Home',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import ScreenA from './Screen/ScreenA';
import ScreenB from './Screen/ScreenB';
import ScreenC from './Screen/ScreenC';
import ScreenD from './Screen/ScreenD';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const Stack = createMaterialBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" activeColor="#fffaf0">
        <Stack.Screen
          name="Screen_A"
          component={ScreenA}
          options={{
            tabBarLabel: 'images',
            tabBarColor: '#9400d3',
            tabBarIcon: ({color}) => (
              <FontAwesome5 name="images" color={color} size={26} />
            ),
          }}
        />

        <Stack.Screen
          name="Screen_B"
          component={ScreenB}
          options={{
            tabBarLabel: 'profile',
            tabBarColor: '#1e90ff',
            tabBarIcon: ({color}) => (
              <FontAwesome5 name="id-badge" color={color} size={26} />
            ),
          }}
        />

        <Stack.Screen
          name="Screen_C"
          component={ScreenC}
          options={{
            tabBarLabel: 'Favorite',
            tabBarColor: '#009387',
            tabBarIcon: ({color}) => (
              <FontAwesome5 name="heart" color={color} size={26} />
            ),
          }}
        />
        <Stack.Screen
          name="Screen_D"
          component={ScreenD}
          options={{
            tabBarLabel: 'Video',
            tabBarColor: '#e91e63',
            tabBarIcon: ({color}) => (
              <FontAwesome5 name="video" color={color} size={26} />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

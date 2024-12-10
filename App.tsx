import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DepartmentScreen from './screens/DepartmentScreen';
import CourseScreen from './screens/CourseScreen';
import LectureScreen from './screens/LectureScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DepartmentScreen">
        <Stack.Screen name="DepartmentScreen" component={DepartmentScreen} />
        <Stack.Screen name="CourseScreen" component={CourseScreen} />
        <Stack.Screen name="LectureScreen" component={LectureScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

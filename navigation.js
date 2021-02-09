
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/login'
import Home from '../screens/Home'
import Search from '../screens/search'
import Contact from '../screens/contact'
import Add_donor from '../screens/add_donor'
import Blood_bank from '../screens/blood_bank'
import Blood_request from '../screens/blood_request'


  
  const Stack = createStackNavigator();
  
  function Navigation() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} /> 
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="Add_donor" component={Add_donor} />
          <Stack.Screen name="Contact" component={Contact} />
          <Stack.Screen name="Blood_bank" component={Blood_bank} />
          <Stack.Screen name="Blood_request" component={Blood_request} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default Navigation;


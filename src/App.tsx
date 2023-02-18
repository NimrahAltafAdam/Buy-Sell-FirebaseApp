/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native'
import React, {useState, useEffect} from 'react'
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import CreateAddScreen from './screens/CreateAddScreen';
import ListItemScreen from './screens/ListItemScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Feather from "react-native-vector-icons/Feather";
import AccountScreen from './screens/AccountScreen';

import auth from "@react-native-firebase/auth"



//import { Provider as PaperProvider } from 'react-native-paper';

// const theme = {
//   ...DefaultTheme,
//   // Specify custom property
//   myOwnProperty: true,
//   // Specify custom property in nested object
//   colors: {
//     myOwnColor: '#BADA55',
//   },
// };

/*In order to setup navigation two navigators are created one is stack navigator in which we will add the login and sign up screen, the remaining screens will be in the tab navigator*/
//1st Step
//Create two navigators one auth and second tab bottom navigator
//Then combine the two navigator stacks and render in the navigationContainer

//2nd Step
//Once the two navigators are set up and running we need to do conditional rendering at root level that if a user is has signed in then tab navigation should be activated but if the user has signed out or has not signed in then stack navigator should be activated
//In order to do this rendering context or redux is used
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
//YOU CAN ADD options={{headerShown: false}} TO REMOVE THE HEADER IN NAVIGATORS
const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>

  )
}

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home'

          } else if (route.name === 'Add') {
            iconName = 'plus-circle'
          } else if (route.name === 'account') {
            iconName = "user"
          }

          //UNABLE TO ABLE THIS INLINE STYLE ON VIEW COMP BELOW: style={{borderWidth:15,borderColor:"white",borderRadius:30}}
          return <View  ><Feather name={iconName} size={35} color={color} /></View>
        },

      })}
      tabBarOptions={{
        activeTintColor: 'deepskyblue',
        inactiveTintColor: 'gray',
      }}
    >
      {/* REMOVE THE TEXT FROM TAB NAVIGATOR SHOW ONLY ICONS */}
      <Tab.Screen name="Home" component={ListItemScreen} options={{title: ""}} />
      <Tab.Screen name="Add" component={CreateAddScreen} options={{title: ""}}/>
      <Tab.Screen name="account" component={AccountScreen} options={{title: ""}}/>
    </Tab.Navigator>
  )
}

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={ListItemScreen} />
      <Drawer.Screen name="Article" component={CreateAddScreen} />
    </Drawer.Navigator>
  )
}

const Navigation = () => {
  const [user, setUser] = useState('')
  useEffect(() => {
    const unSubscribe = auth().onAuthStateChanged((userExist) => {
      if(userExist) {
        setUser(userExist)
      } else {
        setUser("")
      }
    })
  return unSubscribe
  }, [])
  return (
    <NavigationContainer>
      {user ? <TabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  )
}

const App = () => {
  return (
    <>
      <View style={styles.container}>
        {/* <LoginScreen /> */}
        {/* <SignUpScreen /> */}
        {/* <CreateAddScreen /> */}
        {/* <ListItemScreen /> */}

        {/* NOW YOU CAN ADD YOUR NAVIGATION Function here which will return navigation component */}
        <Navigation />
      </View>
    </>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
})

//stopped at firestore section tab navigation set up camera module is still left
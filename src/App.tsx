/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import CreateAddScreen from './screens/CreateAddScreen';
import ListItemScreen from './screens/ListItemScreen';
import 'react-native-gesture-handler';
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

const App = () => {
  return (
    <>
    <View style={styles.container}>
      {/* <LoginScreen /> */}
      {/* <SignUpScreen /> */}
      {/* <CreateAddScreen /> */}
      <ListItemScreen />
    </View>
    </>
  )
}

export default App

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: "#fff"
  }
})
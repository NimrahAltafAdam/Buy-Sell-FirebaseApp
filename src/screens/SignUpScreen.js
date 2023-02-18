/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, Image, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react';
import { TextInput, Button } from 'react-native-paper';

const SignUpScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [text, setText] = useState("");
    return (
        <KeyboardAvoidingView behavior='position'>
            <View style={styles.box1}>
                <Image style={{ width: 300, height: 300 }} source={require("../assets/logo.png")} />
                <Text style={styles.text}>please SignUp to continue!</Text>
            </View>
            <View style={styles.box2}>

                <TextInput
                    label="Email"
                    value={email}
                    mode="outlined"
                    onChangeText={text => setEmail(text)}
                />

                <TextInput
                    label="password"
                    value={password}
                    mode="outlined"
                    secureTextEntry={true}
                    onChangeText={text => setPassword(text)}
                />

<Button   mode="contained" onPress={() => console.log('Pressed')}>
   Sign Up
  </Button>
            </View>
        </KeyboardAvoidingView>
    )
}

export default SignUpScreen

const styles = StyleSheet.create({
    box1: {
        alignItems: "center"
    },
    box2: {
        paddingHorizontal: 40,
        height: "50%",
        justifyContent: "space-evenly",

    },
    text: {
        fontSize: 22
    },
})
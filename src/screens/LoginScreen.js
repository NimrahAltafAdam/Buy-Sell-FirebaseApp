/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react';
import { TextInput, Button } from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import messaging from '@react-native-firebase/messaging';
import firestore from '@react-native-firebase/firestore';

//KEYBOARDAVOIDINGVIEW IS USED TO AVOID THE OVERLAP OF TEXTINPUT AND KEYBOARD
//EVERY Component receives props, we will destructure navigation from the props to redirect users to sign up page

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState([]);
    //USERSIGNUPAUTH



    const userLogin = async () => {
        if (!email || !password) {
            Alert.alert("please add all the fields")
            return
        }

        try {

            const user = await auth().signInWithEmailAndPassword(email, password)
            console.log(user)
            const querySnaps = await firestore().collection("usertoken").get()
            const result = querySnaps.docs.map(docSnap => docSnap.data())
            //console.log("RESULT2", result.count, result.length)

            await messaging().getToken().then(token => {
                for (var i = 0; i < result.length; i++) {
                    // console.log("TOKEN",token)
                    // console.log("RESULT", i, " :",result[i].token)
                    if (token == result[i].token) {
                        console.log("Token already saved")
                        break
                    } else {
                        //inorder to store the tokens of the users devices, we will create a collection and store them init
                         firestore().collection('usertoken').add({
                            token: token
                        })
                        break
                    }
                }

            })
        } catch (err) {
            console.log(err)
            Alert.alert("something went wrong please try different password")
        }
    }
    return (
        <View style={styles.container}>
            <KeyboardAvoidingView behavior='position'>
                <View style={styles.box1}>
                    <Image style={{ width: 300, height: 300 }} source={require("../assets/logo.png")} />
                    <Text style={styles.text}>please login to continue!</Text>
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

                    <Button mode="contained" onPress={() => userLogin()}>
                        Log In
                    </Button>

                    <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                        <Text>Don't have an account?</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     marginTop: 40
    // },
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
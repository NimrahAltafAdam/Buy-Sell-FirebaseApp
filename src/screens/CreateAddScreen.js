/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, Alert } from 'react-native'
import React, {useState} from 'react';
import { TextInput, Button } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth'



const CreateAddScreen = () => {
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [year, setYear] = useState("");
    const [price, setPrice] = useState("");
    const [phone, setPhone] = useState("");

    const postData = async () => {
        if(!name||!desc || !price || !year || !phone){
            Alert.alert("please add all the fields")  
            return
          }
        try {
            await firestore().collection('ads')
        .add({
            name,
            desc,
            year,
            phone,
            price,
            image: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
            uid: auth().currentUser.uid
        })
        Alert.alert("Your add has been successfully posted")
        } catch (error) {
            console.log(error)
            Alert.alert("Something went wrong")
        }
    }
  return (
    <View style={styles.container}>
    <Text style={styles.text}>CREATE ADD</Text>
      <TextInput
                    label="Name"
                    value={name}
                    mode="outlined"
                    onChangeText={text => setName(text)}
                />
                <TextInput
                    label="Description"
                    value={desc}
                    mode="outlined"
                    multiline={true}
                    onChangeText={text => setDesc(text)}
                />
                <TextInput
                    label="Year"
                    value={year}
                    mode="outlined"
                    keyboardType='numeric'
                    onChangeText={text => setYear(text)}
                />
                <TextInput
                    label="Price"
                    value={price}
                    mode="outlined"
                    keyboardType='numeric'
                    onChangeText={text => setPrice(text)}
                />
                <TextInput
                    label="Phone No"
                    value={phone}
                    mode="outlined"
                    keyboardType='numeric'
                    onChangeText={text => setPhone(text)}
                />
                <Button icon="camera"   mode="contained" onPress={() => console.log('Pressed')}>
   Upload Image
  </Button>
  <Button    mode="contained" onPress={() => postData()}>
   Post
  </Button>
    </View>
  )
}

export default CreateAddScreen

const styles = StyleSheet.create({
    container : {
        flex: 1,
        marginHorizontal: 30,
        justifyContent: "space-evenly"
    },
    text: {
        textAlign: "center",
        fontSize: 22
    }
})
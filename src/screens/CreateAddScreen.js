/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react';
import { TextInput, Button } from 'react-native-paper';


const CreateAddScreen = () => {
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [year, setYear] = useState("");
    const [price, setPrice] = useState("");
    const [phone, setPhone] = useState("");
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
  <Button    mode="contained" onPress={() => console.log('Pressed')}>
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
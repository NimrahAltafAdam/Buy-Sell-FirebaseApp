/* eslint-disable prettier/prettier */
import { StyleSheet, View,FlatList } from 'react-native'
import React, {useEffect, useState} from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
const ListItemScreen = () => {
    const myItems = [
        {
            productId: "001",
            name: "Dell Laptop",
            desc: "Inspiron 15 5000 intel core i5",
            year: "2021",
            image: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
            price: "52000",
            phone: "123-456-789"
        },
        {
            productId: "002",
            name: "HP Laptop",
            desc: "Inspiron 15 5000 intel core i5",
            year: "2021",
            image: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
            price: "52000",
            phone: "123-456-789"
        }
    ]
    const [items, setItems] = useState([])
    //We can not use async await inside useEffect therefore a function to get data will be declared outside useeffect

    const getDetails = async () => {
      const querySnaps = await firestore().collection("ads").get()
      const result= querySnaps.docs.map(docSnap=>docSnap.data())
      console.log(result)
      setItems(result)
    }
    //it is a good parctice to add return in useEffect tp avoid warnings and clean the code
    useEffect(() => {
      getDetails()
      return () => {
        console.log("cleanup")
      }
    }, [])

    const renderItem = (item) => {
        return (
            <Card style={styles.card}>
    <Card.Title title={item.productId}  />
    <Card.Content>
      <Text variant="titleLarge">{item.name}</Text>
      <Text variant="bodyMedium">{item.desc}</Text>
      <Text variant="bodyMedium">{item.year}</Text>
    </Card.Content>
    <Card.Cover source={{ uri: item.image }} />
    <Card.Actions>
      <Button>{item.price}</Button>
      <Button>Call Seller</Button>
    </Card.Actions>
  </Card>
        )
    }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ListItemScreen</Text>
      <FlatList
      data={items}
      keyExtractor={(item) => item.price}
      renderItem={({item}) => renderItem(item)}
       />
    </View>
  )
}

export default ListItemScreen

const styles = StyleSheet.create({
    container : {
        flex: 1,
        marginHorizontal: 20,
        justifyContent: "space-evenly",
    },
    card : {
        margin: 10,
        elevation: 2
    },
    text : {
        fontSize: 22,
        textAlign: "center",
        marginVertical: 30
    }
})
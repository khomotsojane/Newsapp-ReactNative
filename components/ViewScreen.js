import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React, {useContext, useEffect, useState} from "react";
import axios from 'axios';
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";


export default function ViewScreen() {
    const url2 = "Your API-KEY";
  
    useEffect(()=>{
      axios.get(url2).then((response) => {
      setCategory1(response.data.articles);
      console.log(response.data);
    })
},[])
    const [category1, setCategory1] = useState([])
    
  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <Text style={{ fontWeight: "bold", fontSize: 40, color:"#3366CC" }}>Daily News</Text>
        <Text style={{fontWeight:'bold'}}>Perfect for any news junkie</Text>
      </View>
      <View style={styles.horview}>
        <Text style={{ fontWeight: "bold", fontSize: 20,color:'#3366CC',marginTop:20}}>Popular News</Text>
        <FlatList
  
          showsHorizontalScrollIndicator={false}
          data={category1}
          renderItem={({ item }) => (
            <TouchableOpacity>
            <View style={styles.list}>
            <Text style={{fontWeight:'bold'}}>Title: {item.author}</Text>
            <View>
                <Image
                 source={{uri:item.urlToImage}}
                 style={{width:300, height:150}}
                />
            </View>
            <Text>{item.description}</Text>
            </View>
             
            </TouchableOpacity>
          )}
        />
      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  Header: {
    flex: 2,
    marginTop:50,
    backgroundColor: "white",
  },
  horview: {
    flex: 7,
  },
  vertview: {
    flex:7
  },
  list:{
    width: 300,
    height:300,
    backgroundColor:'white',
    marginHorizontal:20,
    marginTop:30,
    borderWidth:.2,
    shadowOpacity:6

  },
  list2:{
    width: 350,
    height:300,
    backgroundColor:'white',
    marginHorizontal:20,
    marginTop:30,
    borderWidth:.2,
    shadowOpacity:6

  }
});

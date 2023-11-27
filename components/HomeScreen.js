import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React, {useContext, useEffect, useState} from "react";
import axios from 'axios';
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";



export default function HomeScreen() {
    const url = "Your API KEY";
    const navigation = useNavigation();
    useEffect(()=>{
            axios.get(url).then((response) => {
            setCategory(response.data.articles);
            console.log(response.data);
          })
    },[])
    const [category, setCategory] = useState([])
    
  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <Text style={{ fontWeight: "bold", fontSize: 40, color:"#3366CC" }}>Daily News</Text>
        <Text style={{fontWeight:'bold'}}>Perfect for any news junkie</Text>
      </View>
      <TouchableOpacity onPress={()=> navigation.navigate('ViewScreen')} style={{backgroundColor:'#3366CC', width:100, height:30,  borderRadius:10}}>
        <Text style={{textAlign:'center', color:'white'}}>Popular news</Text>
      </TouchableOpacity>
      <View style={styles.horview}>
        <Text style={{ fontWeight: "bold", fontSize: 20,color:'#3366CC',marginTop:20}}>Recent News</Text>
        <FlatList
  
          showsHorizontalScrollIndicator={false}
          data={category}
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

import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {Surface,Card} from "react-native-paper"
import { Avatar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'


import {Fontisto,FontAwesome,MaterialCommunityIcons,Ionicons,MaterialIcons} from "@expo/vector-icons"
const Home = () => {
  const navigation=useNavigation();
  return (
    <>
       <View style={{
      flex:1,
      backgroundColor:"green",
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-around",
      alignItems:"center",
    }}
    >
        <Avatar.Image size={100} source={require("../assets/avatar.jpg")}  style={{marginTop:40,}}/>
        <View>
        <Text style={{fontSize:15,color:"white",paddingTop:40}}>Welcome to You!!</Text>

<Text style={{fontSize:25,color:"white",paddingTop:10}}>Bishal Shrestha</Text>
        </View>
   
      <MaterialIcons name="notifications-active" size={25} style={{color:"black",paddingTop:20,color:"white"}}/>

    </View>
    <View style={{
          justifyContent:"space-around",
          alignItems:"center",
          flexDirection:"row",
          marginLeft:15,
          marginRight:15,
          display:"flex",
          flexWrap:"wrap",
          paddingTop:30,
          gap:15
          }}>
    <TouchableOpacity onPress={()=>navigation.navigate("SiteMap")}>
                  <Surface style={{ padding: 8,
                  height: 120,
                  width: 150,
                  alignItems: 'center',
                  borderRadius:10,
                  justifyContent: 'center',
                  backgroundColor:"white"}} elevation={4}>
                    <FontAwesome name="car" size={24} color="green" />
                  <Text paddingTop={10}>Available Park(Car)</Text>
                </Surface>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate("SiteMap")}>
                  <Surface style={{ padding: 8,
                  height: 120,
                  width: 150,
                  alignItems: 'center',
                  borderRadius:10,
                  justifyContent: 'center',
                  backgroundColor:"white"}} elevation={4}>
                    <MaterialCommunityIcons name="bike" size={24} color="green" />
                  <Text paddingTop={10}>Available Park(bike)</Text>
                </Surface>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate("SiteMap")}>
                  <Surface style={{ padding: 8,
                  height: 120,
                  width: 150,
                  alignItems: 'center',
                  borderRadius:10,
                  justifyContent: 'center',
                  backgroundColor:"white"}} elevation={4}>
                    <Ionicons name="book-outline" size={24} color="green" />
                  <Text paddingTop={10}>Parking Status</Text>
                </Surface>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate("Payment")}>
                  <Surface style={{ padding: 8,
                  height: 120,
                  width: 150,
                  alignItems: 'center',
                  borderRadius:10,
                  justifyContent: 'center',
                  backgroundColor:"white"}} elevation={4}>
                    <MaterialIcons name="payment" size={24} color="black" />
                  <Text paddingTop={10}>Payment</Text>
                </Surface>
            </TouchableOpacity>
    </View>
    <View style={{margin:10,gap:10 }}>
          <Text>Explore the Parking Area</Text>

          <Card onPress={()=>navigation.navigate("SiteMap")}>
            <Card.Cover source={require("../assets/map.jpeg")} />
          </Card>
          </View>
    </>
 
  )
}

export default Home
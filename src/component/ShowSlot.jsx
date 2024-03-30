import { View, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Card, Text,Button } from "react-native-paper";
import { ApiBaseUrl } from "../lib/axios";

const ShowSlot = () => {
  const navigation = useNavigation();
  const [parkingData, setParkingData] = useState([]);


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`${ApiBaseUrl}/parkingslot/all`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setParkingData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return (
    <ScrollView>
      <View style={{ height: 90, backgroundColor: "green" }}>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 50 }}
        >
          <Ionicons
            name="chevron-back-sharp"
            size={30}
            color="white"
            onPress={() => navigation.goBack()}
          />
          <Text style={{ fontSize: 20, color: "white", marginLeft: 20 }}>
            Slot Details
          </Text>
        </View>
      </View>

{parkingData.map((item)=>(
        <Card key={item._id} style={{ padding: 10, margin: 10 }}>
        <Card.Content>
          <Text variant="titleLarge">Slot Number: {item.slotNumber}</Text>
          <Text variant="bodyMedium">Vehicle Number: {item.vehicleNumber}</Text>
          <Text variant="bodyMedium">Booking Time: {item.bookedTime}</Text>
          <Text variant="bodyMedium">Expired time: {item.expiredTime}</Text>

        
        </Card.Content>
        <View style={{display:"flex",flexDirection:"row",gap:10,alignItems:"center",justifyContent:"center",padding:10}}>
        <Button buttonColor="red" mode="contained">Cancel</Button>
          <Button  mode="outlined">Change</Button>
        </View>
       
      </Card>
    ))}
</ScrollView>
   
      
  );
};

export default ShowSlot;

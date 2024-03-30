import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { DataTable,Button } from "react-native-paper";
import axios from "axios";
import { ApiBaseUrl } from "../lib/axios";
import {useNavigation} from "@react-navigation/native"

const ParkingSlot = ({navigation}) => {
  const navigations= useNavigation();
  const [slotNumber, setSlotNumber] = useState('');
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [responseData, setResponseData] = useState(null);
  const [bookedTime, setBookedTime] = useState('');
const [expiredTime,setExpiredTime]= useState('');
  const handleSubmit = async () => {
    try {
      const requestData = {
        slotNumber,
        vehicleNumber,
        bookedTime,
        expiredTime
      };
      const response = await axios.post(
        `${ApiBaseUrl}/parkingslot/add`,
        requestData
      );
      setResponseData(response?.data);
      Alert.alert('Success', response.data.message);
    } catch (error) {
      Alert.alert('Error', error.response.data.error);
    }
  };
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ height: 80, backgroundColor: "green" }}>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 40 }}
        >
          <Ionicons
            name="chevron-back-sharp"
            size={30}
            color="white"
            onPress={() => navigation.goBack()}
          />
          <Text style={{ fontSize: 20, color: "white", marginLeft: 20 }}>
            Parking Slots
          </Text>
        </View>
      </View>

      <View style={styles.container}>
        <Text style={styles.heading}>Add Parking Slot</Text>
        <TextInput
          style={styles.input}
          placeholder="Slot Number"
          value={slotNumber}
          onChangeText={(text) => setSlotNumber(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Vehicle Number"
          value={vehicleNumber}
          onChangeText={(text) => setVehicleNumber(text)}
        />
        <View style={{display:"flex",flexDirection:"row",gap:10,padding:5}}>
        <TextInput
          style={styles.input}
          placeholder="Booking Time"
          value={bookedTime}
          onChangeText={(text) => setBookedTime(text)}
        />
           <TextInput
          style={styles.input}
          placeholder="Booking expired time"
          value={expiredTime}
          onChangeText={(number) => setExpiredTime(number)}
        />
        </View>
       
        <Button onPress={handleSubmit}>Add Parking Slot</Button>
      </View>
      <DataTable >
        <DataTable.Header style={{ marginRight: 20, gap: 20 }}>
          <DataTable.Title numeric>C1</DataTable.Title>

          <DataTable.Title numeric>C2</DataTable.Title>
          <DataTable.Title numeric>C3</DataTable.Title>
          <DataTable.Title numeric>C4</DataTable.Title>
          <DataTable.Title numeric>C5</DataTable.Title>
          <DataTable.Title numeric>C6</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Title>R1</DataTable.Title>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              paddingTop: 15,
              marginLeft: 7,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                gap: 10,
              }}
            >
              <View style={styles.cardStyle}>
                <Text>R1</Text>
              </View>
              <View style={styles.cardStyle}>
                <Text>R1</Text>
              </View>
              <View style={styles.cardStyle}>
                <Text>R1</Text>
              </View>
              <View style={styles.cardStyle}>
                <Text>R1</Text>
              </View>
              <View style={styles.cardStyle}>
                <Text>R1</Text>
              </View>
              <View style={styles.cardStyle}>
                <Text>R1</Text>
              </View>
              <View style={styles.cardStyle}>
                <Text>R2</Text>
              </View>
              <View style={styles.cardStyle}>
                <Text>R2</Text>
              </View>
              <View style={styles.cardStyle}>
                <Text>R2</Text>
              </View>
              <View style={styles.cardStyle}>
                <Text>R2</Text>
              </View>
              <View style={styles.cardStyle}>
                <Text>R2</Text>
              </View>
              <View style={styles.cardStyle}>
                <Text>R2</Text>
              </View>
              <View style={styles.cardStyle}>
                <Text>R3</Text>
              </View>
              <View style={styles.cardStyle}>
                <Text>R3</Text>
              </View>
              <View style={styles.cardStyle}>
                <Text>R3</Text>
              </View>
              <View style={styles.cardStyle}>
                <Text>R3</Text>
              </View>
              <View style={styles.cardStyle}>
                <Text>R3</Text>
              </View>
              <View style={styles.cardStyle}>
                <Text>R3</Text>
              </View>
            </View>
          </View>
        </DataTable.Row>
      </DataTable>
      <Button onPress={()=>navigations.navigate("ShowSlot")}>See your Slot</Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    width: 45,
    height: 80,
    backgroundColor: "red",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding:5,
  },
  heading: {
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    width: "50%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 5,
  },
});
export default ParkingSlot;

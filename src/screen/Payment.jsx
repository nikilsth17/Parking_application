import { View, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Card, Text } from "react-native-paper";
import { Avatar,Button } from 'react-native-paper';
import {useNavigation} from "@react-navigation/native"

const Payment = () => {
  const navigation= useNavigation();

  return (
    <ScrollView>
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
            Payment
          </Text>
        </View>
      </View>
      <View style={{padding:15,gap:10}}>
      <Card >
        <Card.Content style={styles.cardStyle}>
        <Avatar.Image size={80} source={require('../assets/esewa.png')} />
          <Text variant="titleLarge" style={styles.textStyle}>Esewa</Text>
        </Card.Content>
        <Button>Pay</Button>
      </Card>
      <Card >
        <Card.Content style={styles.cardStyle}>
        <Avatar.Image size={80} source={require('../assets/khalti.png')} />
          <Text variant="titleLarge" style={styles.textStyle}>Khalti</Text>
        </Card.Content>
        <Button>Pay</Button>
      </Card>
      <Card >
        <Card.Content style={styles.cardStyle}>
        <Avatar.Image size={80} source={require('../assets/fonepay.png')} />
          <Text variant="titleLarge" style={styles.textStyle}>Fone Pay</Text>
        </Card.Content>
        <Button>Pay</Button>
      </Card>
      </View>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
 cardStyle:{
  display:"flex",
  flexDirection:"row",
  gap:10
 },
 textStyle:{
  marginTop:20,
  marginLeft:40
 }
});



export default Payment;

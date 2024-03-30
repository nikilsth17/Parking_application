import React, { useEffect, useState } from 'react'
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View, Dimensions, Text } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import * as Location from 'expo-location';
import { useNavigation } from "@react-navigation/native";
import { Button } from 'react-native-paper';
const SiteMap = () => {
    const navigation= useNavigation();
    const [mapRegion, setMapRegion] = useState({
        latitude: 27.7172,
        longitude: 85.3240,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
      const [sites, setSites] = useState([]);
      const [selectedSite, setSelectedSite] = useState(null);
    
      const fetchBloodBankData = () => {
        // Dummy sites data with rating and contact information
        const dummySiteData = [
          { name: 'Paking Area-1', latitude: 27.9207, longitude:  82.7347,contact: '123-456-7890' },
          { name: 'Parking Area-2', latitude: 27.6721, longitude: 85.4283,contact: '123-456-7890' },
          { name: 'Parking Area-3', latitude: 27.9324, longitude: 86.7014,contact: '123-456-7890'},
          { name: 'Parking Area-4', latitude: 27.7215, longitude: 85.3620,contact: '123-456-7890'},
          { name: 'Parking Area-5', latitude: 27.5193, longitude:84.3135,contact: '123-456-7890'},
          { name: 'Parking Area-6', latitude: 27.7105, longitude:85.3488,contact: '123-456-7890'},
          { name: 'Parking Area-7', latitude:28.8169, longitude:83.8718,contact: '123-456-7890' },
          { name: 'Parking Area-8', latitude: 26.7304, longitude:85.9256,contact: '123-456-7890'},
          { name: 'Parking Area-9', latitude: 27.8105, longitude:85.3500,contact: '123-456-7890'},
          { name: 'Parking Area-10', latitude: 27.9105, longitude:85.3480,contact: '123-456-7890'},
          { name: 'Parking Area-11', latitude: 27.5105, longitude:85.3490,contact: '123-456-7890'},

        ];
        setSites(dummySiteData);
      };
    
      const userLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          console.log('Permission to access location was denied');
          return;
        }
        let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
        setMapRegion({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      };
    
      useEffect(() => {
        userLocation();
        fetchBloodBankData(); // Fetch sites data when component mounts
      }, []);
    
      const handleMarkerPress = (sites) => {
        setSelectedSite(sites);
      };
  return (
    <>
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
            Map of Parking
          </Text>
        </View>
      </View>
      <View style={styles.container}>
    <MapView style={styles.map} region={mapRegion}>
      {sites.map((sites, index) => (
        <Marker
          key={index}
          coordinate={{ latitude: sites.latitude, longitude: sites.longitude }}
          title={sites.name}
          onPress={() => handleMarkerPress(sites)}
        >
          <Callout>
            <View>
              <Text>{sites.name}</Text>
              <Text>Contact:{sites.contact}</Text>
            </View>
          </Callout>
        </Marker>
      ))}
    </MapView>
    {selectedSite && (
      <View style={styles.selectedBloodBankContainer}>
        <Text>Selected Sites: {selectedSite.name}</Text>
        <Text>Contact: {selectedSite.contact}</Text>
        <Button onPress={()=>navigation.navigate("ParkingSlot")}>Find parking</Button>

      </View>
    )}
    <Button title='Get Location' onPress={userLocation} />
  </View>
    </>
  
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
    selectedBloodBankContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'white',
      padding: 10,
    },
  });
export default SiteMap
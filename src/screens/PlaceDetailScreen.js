import React, { useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { useSelector } from "react-redux";
import MapPreview from "../components/MapPreview";
import { COLORS } from "../const";

const PlaceDetailScreen = ({ route }) => {
  const { placeId } = route.params;
  const place = useSelector((state) =>
    state.places.places.find((item) => item.id === placeId)
  );

  useEffect(() => {
    console.log(place);
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{place.address}</Text>
      </View>
      <Image source={{ uri: place.image }} style={styles.image} />
      <View style={styles.location}>
        <View style={styles.addressContainer}>
          <Text>{"Mapa"}</Text>
        </View>
        <MapPreview
          style={styles.map}
          location={{ lat: place.lat, lng: place.lng }}
        >
          <Text>Ubicacion no disponible</Text>
        </MapPreview>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    height: "25%",
    minHeight: 250,
    width: "90%",
    padding: 20,
    borderRadius:10,
  },
  location: {
    height:"38%",
    margin: 20,
    width: "90%",
    maxWidth: 350,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
  },
  addressContainer: {
    padding: 20,
  },
  address: {
    color: COLORS.MAROON,
    textAlign: "center",
  },
  map: {
    height: 200,
    borderRadius: 10
    
  },
  textContainer: {
    padding: 20,
  },
  title: {
    fontSize: 15,
  },
});

export default PlaceDetailScreen;

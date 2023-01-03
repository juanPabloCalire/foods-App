import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { COLORS } from "../const";

const PlaceItem = ({ title, image, address, onSelect }) => {
  return (
    <TouchableOpacity onPress={onSelect} style={styles.placeItem}>
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.address}>{address}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PlaceItem;

const styles = StyleSheet.create({
  placeItem: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingVertical: 16,
    paddingHorizontal: 30,
    flexDirection: "row",
    alignItems: "center",
    fontFamily: 'ComfortaaBold',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 35,
    backgroundColor: COLORS.PEACH_PUFF,
  },
  info: {
    marginLeft: 25,
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  title: {
    color: COLORS.BLUSH,
    fontSize: 18,
    marginBottom: 6,
    fontFamily: 'ComfortaaBold',
  },
  address: {
    color: "#777",
    fontSize: 16,
    fontFamily: 'ComfortaaBold',
  },
});

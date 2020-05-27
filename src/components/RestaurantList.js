import React from "react";
import { StyleSheet, Text, View } from "react-native";

function RestaurantList() {
  return (
    <View style={styles.container}>
      <Text>Restaurant List</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default RestaurantList;

import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";

function SearchBar({ term, onTermChange, onTermSubmit }) {
  return (
    <View style={styles.card}>
      <Feather style={styles.icon} name="search" />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        value={term}
        onChangeText={onTermChange}
        style={styles.searchInput}
        placeholder="Search"
        onEndEditing={onTermSubmit}
      />
      {term ? (
        <TouchableOpacity
          onPress={() => {
            onTermChange("");
          }}
          style={styles.clearButton}
        >
          <AntDesign name="close" size={20} color="black" />
        </TouchableOpacity>
      ) : null}
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    margin: 20,
    height: 40,
    backgroundColor: "#F0EEEE",
    borderRadius: 5,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  icon: {
    marginHorizontal: 10,
    fontSize: 24,
    color: "black",
    alignSelf: "center",
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  clearButton: {
    marginRight: 10,
    alignSelf: "center",
  },
});
export default SearchBar;

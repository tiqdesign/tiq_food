import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

function SearchScreen() {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50, //'https://api.yelp.com/v3/businesses/search?limit=50'
          term: searchTerm,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
    } catch (e) {
      setErrorMessage("Something went wrong");
    }
  };

  return (
    <View style={styles.container}>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => {
          setTerm(newTerm);
          setErrorMessage("");
        }}
        onTermSubmit={() => {
          searchApi(term);
        }}
      />
      <Text>We have found {results.length} results</Text>
      <Text style={styles.errorMessage}>{errorMessage}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  errorMessage: {
    color: "red",
    textAlign: "center",
    marginHorizontal: 20,
  },
});
export default SearchScreen;

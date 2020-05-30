import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

function SearchScreen({ navigation }) {
  const [term, setTerm] = useState(""); //term for search
  //we created a custom hook called useResults() and we destruct these keys for using in jsx
  const [searchApi, results, errorMessage] = useResults();

  function filterResultByPrice(price) {
    return results.filter((result) => {
      return result.price === price;
    });
  }

  return (
    <View style={styles.container}>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => {
          setTerm(newTerm);
        }}
        onTermSubmit={() => {
          searchApi(term);
        }}
      />
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      <ScrollView>
        <ResultsList
          results={filterResultByPrice("$")}
          title="Cost Effective"
          navigation={navigation}
        />
        <ResultsList
          results={filterResultByPrice("$$")}
          title="Bit Pricier"
          navigation={navigation}
        />
        {filterResultByPrice("$$$").length === 0 ? null : (
          <ResultsList
            results={filterResultByPrice("$$$")}
            title="Bit Spender"
            navigation={navigation}
          />
        )}
      </ScrollView>
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

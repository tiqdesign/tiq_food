import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import ResultDetail from "../components/ResultsDetail";

function ResultsList({ title, results, navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={results}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(result) => result.id}
        horizontal={true}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ResultsShow");
              }}
            >
              <ResultDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  title: {
    marginLeft: 15,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
});
export default ResultsList;

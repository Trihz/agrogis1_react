import React from "react";
import {View,Text,StyleSheet} from "react-native";

const App = () =>{
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Agrogis
      </Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white", 
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green", 
  },
});

export default App
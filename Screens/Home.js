import "react-native-gesture-handler";
import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  Button,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
} from "react-native";
import { useFonts } from "expo-font";

export default class Home extends Component {
  render() {
    // const [loaded] = useFonts({
    //   Raleway: require("../assets/fonts/Raleway.ttf"),
    // });

    // if (!loaded) {
    //   return null;
    // }
    return (
      <View style={styles.container}>
        {/* TITLE */}
        <Text style={styles.title}>READY FOR COOKING?</Text>

        <Text style={styles.subtitle}>RECENTLY VIEWED</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF9E9",
  },
  title: {
    fontFamily: "Raleway",
    fontSize: 35,
    color: "#252525",
    fontWeight: "900",

    position: "absolute",
    left: 22,
    top: 28,
  },
  subtitle: {
    fontFamily: "Raleway",
    fontSize: 15,
    fontWeight: "500",
    color: "#252525",

    position: "absolute",
    left: 22,
    top: 132,
  },
});

import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  FlatList,
  Button,
  Alert,
  onPressLearnMore,
  ScrollView,
} from "react-native";
// import { createStackNavigator } from "@react-navigation/stack";

import * as Recipe from "../recipes";
import Foods from "../const/Foods";
import { useFonts } from "expo-font";
import * as Font from "expo-font";
// import Foodings from "../const/Foodings";
import { SafeAreaView } from "react-native-safe-area-context";

// const Stack = createStackNavigator();
export default class Recipes extends Component {
  state = {
    fontLoaded: false,
  };

  componentDidMount() {
    this.loadAssetsAsync();
  }

  async loadAssetsAsync() {
    await Font.loadAsync({
      Raleway: require("../assets/fonts/Raleway.ttf"),
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    if (!this.state.fontLoaded) {
      return null; // render some progress indicator
    }
    return (
      // <SafeAreaView style={{ flex: 1 }}>
      //   <View
      //     style={{
      //       flex: 1,
      //       margin: 20,
      //     }}
      //   >
      //     {/* {renderRecipes()} */}
      //     <Text style={styles.title}>RECIPES</Text>
      //     <Text style={styles.subTitle}>CATEGORIES</Text>

      //     <View>
      //       <ScrollView
      //         horizontal
      //         style={styles.fixToText}
      //         showsHorizontalScrollIndicator={true}
      //       >
      //         <TouchableOpacity style={styles.button}>
      //           <Text style={styles.buttonText}>All</Text>
      //         </TouchableOpacity>

      //         <TouchableOpacity style={styles.button}>
      //           <Text style={styles.buttonText}>Meal</Text>
      //         </TouchableOpacity>

      //         <TouchableOpacity style={styles.button}>
      //           <Text style={styles.buttonText}>Lunch</Text>
      //         </TouchableOpacity>

      //         <TouchableOpacity style={styles.button}>
      //           <Text style={styles.buttonText}>Snack</Text>
      //         </TouchableOpacity>

      //         <TouchableOpacity style={styles.button}>
      //           <Text style={styles.buttonText}>Dessert</Text>
      //         </TouchableOpacity>
      //       </ScrollView>
      //     </View>

          {/* <View style={styles.fixToText}>
            <Button
              style={styles.button}
              title="All"
              // onPress={() => Alert.alert("Left button pressed")}
            />
            <Button
              style={styles.button}
              title="Meal"
              // onPress={() => Alert.alert("Right button pressed")}
            />
            <Button
              style={styles.button}
              title="Lunch"
              // onPress={() => Alert.alert("Right button pressed")}
            />
            cessibilityLabel="Learn more about this purple button"
          </View> */}

      //     <FlatList
      //       showsVerticalScrollIndicator={false}
      //       style={styles.mainList}
      //       data={Foods}
      //       keyExtractor={(item) => item.id}
      //       renderItem={({ item }) => {
      //         return (
      //           <TouchableOpacity
      //             onPress={() => {
      //               this.props.navigation.navigate("Foods", { item });
      //             }}
      //           >
      //             <View style={styles.itemContainer}>
      //               <View style={styles.itemList}>
      //                 <Text style={styles.name}>{item.name}</Text>
      //                 <Text style={styles.description}>{item.description}</Text>
      //                 {/* <Image
      //                   source={{ uri: item.image }}
      //                   style={styles.image}
      //                 /> */}
      //               </View>
      //             </View>
      //           </TouchableOpacity>
      //         );
      //       }}
      //     />
      //   </View>
      // </SafeAreaView>
      <View>
      <ScrollView horizontal={true}>

      <Text>Child 1</Text>
      <Text>Child 2</Text>
      <Text>Child 3</Text>

      </ScrollView>
    </View> 

    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "Raleway",
    fontSize: 40,
    color: "black",
    fontWeight: "bold",

    position: "absolute",
  },
  subTitle: {
    fontFamily: "Raleway",
    fontSize: 15,
    fontWeight: "500",
    color: "black",

    position: "absolute",
    top: 60,
  },
  fixToText: {
    flex: 1,
    position: "absolute",
    flexDirection: "row",

    top: 90,
  },
  button: {
    justifyContent: "space-between",
    width: 100,
    padding: 10,
    // paddingLeft: 25,
    // paddingRight: 25,
    marginRight: 15,

    borderRadius: 100,
    backgroundColor: "#F29191",
  },
  buttonText: {
    fontFamily: "Raleway",
    textAlign: "center",
    fontSize: 18,
    color: "white",
  },
  itemContainer: {
    flex: 1,
  },
  itemList: {
    margin: 5,
    padding: 5,
    borderRadius: 10,
    height: 150,

    backgroundColor: "#F29191",
  },
  mainList: {
    flex: 1,
    top: 150,
  },
  name: {
    width: "50%",
    fontWeight: "700",
    fontSize: 20,
  },
  description: {
    width: "50%",
    fontSize: 13,
  },
  image: {
    opacity: 0.99,
    width: "50%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10,
    position: "absolute",
    bottom: 0,
    right: 0,
  },
});

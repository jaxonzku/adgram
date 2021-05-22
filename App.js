import { StatusBar } from "expo-status-bar";
import React from "react";
import Expo from'expo';


import {
  StyleSheet,
  Button,
  Text,
  View,
  Alert,
  SafeAreaView,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={styles.title}></View>
      <View style={styles.title}>
        <Text style={styles.Adgram}>Adgram</Text>
      </View>
      <View style={styles.bottom}>
        <View style={styles.bottom2}></View>
        <View style={styles.influencer}>
          <Button
            title="INFLUENCER"
            onPress={() => Alert.alert("Simple Button pressed")}
          />
        </View>
        <View style={styles.influencer}>
          <Button
            title="       ADVERTISER       "
            color="green"
            onPress={() => Alert.alert("Simple Button pressed")}
          />
        </View>
        <View style={styles.bottom2}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 80,

    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "LobsterTwo-BoldItalic",
  },
  title: {
    alignContent: "center",
    textAlign: "center",
    flex: 1,
  },

  Adgram: {
    fontSize: 40,
    fontFamily: "LobsterTwo-BoldItalic",
    color: "skyblue",
  },
  bottom: {
    flex: 4,
  },
  bottom2: {
    flex: 1,
  },
  influencer: {
    fontFamily: "LobsterTwo-BoldItalic",
    alignContent: "center",
    flex: 1,
  },
  advertiser: {
    color: "green",
    alignContent: "center",

    flex: 1,
  },
});

import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { gStyle } from "../../styles/style";

export default function Main({ navigation }) {
  const [news, setNews] = useState([
    {
      name: "Google",
      anons: "Google!!!",
      full: "Google is cool",
      key: 1,
      img: '../../assets/google.webp',
    },
    {
      name: "Apple",
      anons: "Apple!!!",
      full: "Apple is cool",
      key: 2,
      img: "https://global-uploads.webflow.com/62b0e6308cc691625470b227/62dec0259f18b71442a15966_Apple-Logo.png",
    },
    {
      name: "FaceBook",
      anons: "FaceBook!!!",
      full: "FaceBook is cool",
      key: 3,
      img: '../../assets/facebook.png',
    },
  ]);

  return (
    <View style={gStyle.main}>
      <Text style={gStyle.title}>Main Page</Text>
      <FlatList
        data={news}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={(styles.item, styles.header)}
            onPress={() => navigation.navigate("FullInto", item)}
          >
            <Image
              source={{
                width: "100%",
                width: 200,
                uri: item.img,
              }}
            />
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.anons}>{item.anons}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 30,
  },
  item: {
    width: "100%",
    marginBottom: 30,
  },
  title: {
    fontFamily: 'mt-semi-bold',
    fontSize: 22,
    textAlign: "center",
    marginTop: 20,
    color: "#474747",
  },
  anons: {
    fontFamily: 'mt-ligh',
    fontSize: 16,
    textAlign: "center",
    marginTop: 5,
    color: "#474747",
  },
});

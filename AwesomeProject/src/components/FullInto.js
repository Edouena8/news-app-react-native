import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { gStyle } from "../../styles/style";

export default function FullInto({ route }) {
  // const loadScene = () => {
  //   navigation.goBack();
  // };

  return (
    <View style={gStyle.main}>
      <Image
        source={{
          width: "100%",
          width: 200,
          uri: route.params.img,
        }}
      />
      <Text style={[gStyle.title, styles.header]}>{route.params.name}</Text>
      <Text style={styles.full}>{route.params.full}</Text>
      {/* <Button title="Open page" onPress={loadScene} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  full: {
    anons: {
      fontFamily: 'mt-ligh',
      fontSize: 16,
      textAlign: "center",
      marginTop: 20,
      color: "#f55151",
    },
    header: {
      fontSize: 25,
      marginTop: 25,
    },
  },
});

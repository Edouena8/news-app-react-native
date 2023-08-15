import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import Main from "./src/components/Main";

export default function App() {
  const [fontsLoaded] = useFonts({
    "mt-semi-bold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
    "mt-light": require("./assets/fonts/Montserrat-Light.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <Main />;
}

const styles = StyleSheet.create({});

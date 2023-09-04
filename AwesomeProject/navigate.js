import React from "react";
import Main from "./src/components/Main";
import FullInto from "./src/components/FullInto";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            title: "Main",
            headerStyle: {
              backgroundColor: "#eb5d3d",
              height: 100,
            },
            headerTitleStyle: {
              fontWeight: "light",
            },
          }}
        />
        <Stack.Screen
          name="FullInto"
          component={FullInto}
          options={{ title: "Article" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

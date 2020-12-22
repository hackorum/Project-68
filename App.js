import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import FacebookScreen from "./screens/FacebookScreen";
import InstagramScreen from "./screens/InstagramScreen";

export default function App() {
  return <Container />;
}

const navigator = createBottomTabNavigator({
  Facebook: FacebookScreen,
  Instagram: InstagramScreen,
});

const Container = createAppContainer(navigator);

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import {
  View,
  Text,
  Button,
  ActivityIndicator,
  AsyncStorage,
} from "react-native";
import { Center } from "./Center";
import { AuthParamList, AuthNavProps } from "./AuthParamList";
import { AuthContext } from "./AuthProvider";
import { AppTab } from "./AppTab";
import { AuthStack } from "./AuthStack";
interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = ({}) => {
  const [loading, setloading] = React.useState(true);
  const { user, login, logout } = React.useContext(AuthContext);

  React.useEffect(() => {
    AsyncStorage.getItem("user")
      .then((userString) => {
        if (userString) {
          login();
        }
        setloading(false);
      })
      .catch((err) => {
        console.log(err);
        setloading(false);
      });
  }, []);
  if (loading) {
    return (
      <Center>
        <ActivityIndicator size="large" />
      </Center>
    );
  }
  return (
    <NavigationContainer>
      {user ? <AppTab /> : <AuthStack />}
    </NavigationContainer>
  );
};

import React from "react";
import { Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthParamList, AuthNavProps } from "./AuthParamList";
import { AuthContext } from "./AuthProvider";
import { Center } from "./Center";
import { Button } from "react-native";

interface AuthStackProps {}

const Stack = createStackNavigator<AuthParamList>();

function Login({ navigation }: AuthNavProps<"Login">) {
  const { login } = React.useContext(AuthContext);
  return (
    <Center>
      <Text>I am in Login Screen</Text>
      <Button
        title="Log me In"
        onPress={() => {
          login();
        }}
      />
      <Button
        title="Go to Register"
        onPress={() => {
          navigation.navigate("Register");
        }}
      />
    </Center>
  );
}
function Register({ navigation, route }: AuthNavProps<"Register">) {
  return (
    <Center>
      <Text>Route Name: {route.name}</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate("Login")}
      />
    </Center>
  );
}
export const AuthStack: React.FC<AuthStackProps> = ({}) => {
  return (
    <Stack.Navigator
      screenOptions={{ header: () => null }}
      initialRouteName="Login"
    >
      <Stack.Screen
        options={{ headerTitle: "Sign In" }}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerTitle: "Sign Up",
        }}
      />
    </Stack.Navigator>
  );
};

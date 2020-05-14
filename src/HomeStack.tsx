import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Center } from "./Center";
import { Text, TouchableOpacity, FlatList, Button } from "react-native";
import { AuthContext } from "./AuthProvider";
import faker from "faker";
import { HomeParamList, HomeNavProps } from "./HomeParamList";
import { addProductRoute } from "./addProductRoute";
interface HomeStackProps {}
const Stack = createStackNavigator<HomeParamList>();

function Feed({ navigation }: HomeNavProps<"Feed">) {
  return (
    <Center>
      <FlatList
        style={{ width: "100%" }}
        data={Array.from(Array(50), () => faker.commerce.product())}
        renderItem={({ item }) => {
          return (
            <Button
              title={item}
              onPress={() => {
                navigation.navigate("Product", {
                  name: item,
                });
              }}
            />
          );
        }}
        keyExtractor={(product, id) => product + id}
      />
    </Center>
  );
}

export const HomeStack: React.FC<HomeStackProps> = ({}) => {
  const { logout } = React.useContext(AuthContext);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Feed"
        options={{
          headerRight: () => {
            return (
              <TouchableOpacity onPress={() => logout()}>
                <Text>Logout</Text>
              </TouchableOpacity>
            );
          },
        }}
        component={Feed}
      />
      {addProductRoute(Stack)}
    </Stack.Navigator>
  );
};
